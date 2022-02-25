let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';document.getElementById('ivru9').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};document.getElementById('ibt0j').onclick = (event) => {
    event.preventDefault();
    { location.href= '/create';}};document.getElementById('ii8qs6').onclick = (event) => {
    event.preventDefault();
    let myprojectsId = window.location.pathname.replace('/view/','');
      if(myprojectsId === '/view' || myprojectsId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('ii8qs6')) === true){
            myprojectsId = value._id;
          }
        })
      }
   let myprojects = new TempApi.Myprojects();myprojects['ptitle'] = document.querySelector("[annotationname = 'ptitle']").textContent;myprojects['pstart'] = document.querySelector("[annotationname = 'pstart']").textContent;myprojects['pend'] = document.querySelector("[annotationname = 'pend']").textContent;myprojects['pduration'] = document.querySelector("[annotationname = 'pduration']").textContent;myprojects['pabstract'] = document.querySelector("[annotationname = 'pabstract']").textContent;myprojects['pdescription'] = document.querySelector("[annotationname = 'pdescription']").textContent;myprojects['pga'] = document.querySelector("[annotationname = 'pga']").textContent;myprojects['pwebsite'] = document.querySelector("[annotationname = 'pwebsite']").textContent; let opts = {myprojects};apiMyprojectsApi.updatemyprojects( myprojectsId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ptitle]').textContent = response.body.query.ptitle ;document.querySelector('[annotationname = pstart]').textContent = response.body.query.pstart ;document.querySelector('[annotationname = pend]').textContent = response.body.query.pend ;document.querySelector('[annotationname = pduration]').textContent = response.body.query.pduration ;document.querySelector('[annotationname = pabstract]').textContent = response.body.query.pabstract ;document.querySelector('[annotationname = pdescription]').textContent = response.body.query.pdescription ;document.querySelector('[annotationname = pga]').textContent = response.body.query.pga ;document.querySelector('[annotationname = pwebsite]').textContent = response.body.query.pwebsite ;{ location.href= '/update/'+response.body.query._id+'';}}});};window.onload = () => {let myprojectsId = window.location.pathname.replace('/view/','');
      if(myprojectsId === '/view' || myprojectsId === ''){
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach( (value, key) => {
          if(document.getElementById(key).contains(document.getElementById('i3nfi')) === true){
            myprojectsId = value._id;
          }
        })
      }
   apiMyprojectsApi.getmyprojects( myprojectsId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = ptitle]').textContent = response.body.query.ptitle ;document.querySelector('[annotationname = pstart]').textContent = response.body.query.pstart ;document.querySelector('[annotationname = pend]').textContent = response.body.query.pend ;document.querySelector('[annotationname = pduration]').textContent = response.body.query.pduration ;document.querySelector('[annotationname = pabstract]').textContent = response.body.query.pabstract ;document.querySelector('[annotationname = pdescription]').textContent = response.body.query.pdescription ;document.querySelector('[annotationname = pga]').textContent = response.body.query.pga ;document.querySelector('[annotationname = pwebsite]').textContent = response.body.query.pwebsite ;}});};