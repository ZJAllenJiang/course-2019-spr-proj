import pandas as pd
import requests
import json
import dml
import prov.model
import datetime
import uuid
import csv
from io import StringIO
import json
import pymongo
import numpy as np


class cau_landmark_merge(dml.Algorithm):
    contributor = 'mmao95_dongyihe_weijiang_zhukk'
    reads = [contributor + '.colleges_and_universities',
             contributor + '.landmarks']
    writes = [contributor + '.cau_landmark_merge']

    @staticmethod
    def execute(trial=False):
        startTime = datetime.datetime.now()
        contributor = 'mmao95_dongyihe_weijiang_zhukk'
        reads = [contributor + '.colleges_and_universities',
                 contributor + '.landmarks']
        writes = [contributor + '.cau_landmark_merge']

        # Set up the database connection.
        client = dml.pymongo.MongoClient()
        repo = client.repo
        repo.authenticate(contributor, contributor)

        # get CAU_list from mongodb
        CAU_list = list(repo[reads[0]].find())
        CAU_df = pd.DataFrame(CAU_list)
        CAU_list = np.array(CAU_df).tolist()

        LandMark_list = list(repo[reads[1]].find())
        LandMark_df = pd.DataFrame(LandMark_list)
        LandMark_list = np.array(LandMark_df).tolist()

        # update the dataset and output

        # define relational models

        def union(R, S):
            return R + S

        def difference(R, S):
            return [t for t in R if t not in S]

        def intersect(R, S):
            return [t for t in R if t in S]

        def project(R, p):
            return [p(t) for t in R]

        def select(R, s):
            return [t for t in R if s(t)]

        def product(R, S):
            return [(t, u) for t in R for u in S]

        def aggregate(R, f):
            keys = {r[0] for r in R}
            return [(key, f([v for (k, v) in R if k == key])) for key in keys]

        # select and project the aimed list
        cau_list = [(City, Name, Address) for [Address, City,
                                               latitude, longitude, Name, Zipcode, id] in CAU_list]
        landmark_list = [(City, Name, Address) for [
            Address, Areas_Desi, Name, City, Petiton, Width, id] in LandMark_list]
        cau_landmark_merge_list = cau_list + landmark_list

        columnName = ['Neighborhood', 'Name', 'Address']
        df = pd.DataFrame(columns=columnName, data=cau_landmark_merge_list)
        data = json.loads(df.to_json(orient="records"))

        repo.dropCollection('cau_landmark_merge')
        repo.createCollection('cau_landmark_merge')
        repo[writes[0]].insert_many(data)

        repo.logout()

        endTime = datetime.datetime.now()

        return {"start": startTime, "end": endTime}

    @staticmethod
    def provenance(doc=prov.model.ProvDocument(), startTime=None, endTime=None):
        '''
            Create the provenance document describing everything happening
            in this script. Each run of the script will generate a new
            document describing that invocation event.
            '''

        contributor = 'mmao95_dongyihe_weijiang_zhukk'
        client = dml.pymongo.MongoClient()
        repo = client.repo
        repo.authenticate(contributor, contributor)

        # The scripts are in <folder>#<filename> format.
        doc.add_namespace('alg', 'http://datamechanics.io/algorithm/')
        # The data sets are in <user>#<collection> format.
        doc.add_namespace('dat', 'http://datamechanics.io/data/')
        # 'Extension', 'DataResource', 'DataSet', 'Retrieval', 'Query', or 'Computation'.
        doc.add_namespace('ont', 'http://datamechanics.io/ontology#')
        # The event log.
        doc.add_namespace('log', 'http://datamechanics.io/log/')

        this_script = doc.agent('alg:' + contributor + '#cau_landmark_merge', {
                                prov.model.PROV_TYPE: prov.model.PROV['SoftwareAgent'], 'ont:Extension': 'py'})
        res_cau = doc.entity('dat:'+contributor+'#colleges_and_universities', {prov.model.PROV_LABEL:'Colleges and Universities', prov.model.PROV_TYPE:'ont:DataSet'})
        res_landmark = doc.entity('dat:'+contributor+'#landmarks', {prov.model.PROV_LABEL:'Landmark', prov.model.PROV_TYPE:'ont:DataSet'})

        filter_names = doc.activity(
            'log:uuid' + str(uuid.uuid4()), startTime, endTime)
        doc.wasAssociatedWith(filter_names, this_script)
        doc.usage(filter_names, res_cau, startTime, None,
                  {prov.model.PROV_TYPE: 'ont:Computation',
                   'ont:Computation': 'Selection'
                   }
                  )
        doc.usage(filter_names, res_landmark, startTime, None,
                  {prov.model.PROV_TYPE: 'ont:Computation',
                   'ont:Computation': 'Selection'
                   }
                  )

        result = doc.entity('dat:' + contributor + '#cau_landmark_merge', {
                        prov.model.PROV_LABEL: 'CAU and Landmark Merge', prov.model.PROV_TYPE: 'ont:DataSet'})
        doc.wasAttributedTo(result, this_script)
        doc.wasGeneratedBy(result, filter_names, endTime)
        doc.wasDerivedFrom(result, res_cau, filter_names, filter_names, filter_names)
        doc.wasDerivedFrom(result, res_landmark, filter_names, filter_names, filter_names)

        repo.logout()

        return doc

# eof
