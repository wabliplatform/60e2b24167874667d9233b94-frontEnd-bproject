let apiMyprojectsApi = new TempApi.MyprojectsApi();import TempApi from '../src/index';let apiTasksApi = new TempApi.TasksApi();let tasks = new TempApi.Tasks();document.getElementById('iny28').onclick = (event) => {
    event.preventDefault();
    tasks['tname'] = document.querySelector("[annotationname = 'tname']").value;tasks['edate'] = document.querySelector("[annotationname = 'edate']").value;tasks['vpms'] = document.querySelector("[annotationname = 'vpms']").value;tasks['tdescription'] = document.querySelector("[annotationname = 'tdescription']").value;apiTasksApi.createtasks( tasks, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { location.href= '/tasks/'+response.body.query._id+'';}}});};window.onload = () => {apiMyprojectsApi.getAllmyprojects((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iwpzu").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
    });
    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};