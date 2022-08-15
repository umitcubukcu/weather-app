import React, { useState, useEffect } from 'react'
import axios from "axios";
import '../api/api-service.css'

function ApiWorker(props) {
   const [data, setData] = useState();
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const getData = async (path) => {
         try {
            const response = await axios.get(path);
            setData(response.data);
            setError(null);
         } catch (err) {
            setError(err.message);
            setData(null);
         } finally {
            setLoading(false);
         }
      };
      getData(props.path);
   }, [props.path]);

   return (
      <div className='apiContainer'>
         {loading && <span>Veriler yükleniyor...</span>}
         {error && <h3>Veri yüklenirken bir sorun yaşandı: {error}</h3>}
         {data && 
            <h2>{data.name}-{data.sys.country}</h2>
         }
      </div>
   )
}

export default ApiWorker