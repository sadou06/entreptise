

let addTagBtn;
let container;
let tag;
let table_container;
const applicationKey = "8nrbhb0ru7ff6hunry5edgpfb"
const params = "&hr=0&play=1&title=0&qs=1"//"&help=0&play=1&qs=0&gt=0&hr=0";
const matSpace = "/bundle/showcase.html?m=";
let matSid = "wu2NRhJwHNJ";
let iframe;
const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
var buttonn = document.getElementById('buttonn');
var text = document.getElementById('text');


document.addEventListener("DOMContentLoaded",() => {
  iframe = document.querySelector('.showcase');
  container = document.querySelector('.showcase_container');
  addTagBtn = document.querySelector('.add_tag');
  importBtn = document.querySelector('.import_tags');
  exportBtn = document.querySelector('.export_tags');
  removeBtn = document.querySelector('.remove_tags');
  ScreenBtn  = document.querySelector('.ScreenShot');
  downloadBtn = document.querySelector('.Download');
  testBtn = document.querySelector('.test');
  //sidSelector = document.getElementById('sid-input');
  table_container = document.querySelector(".scrollable");
  iframe.setAttribute('src', `${matSpace}${matSid}${params}`);
  iframe.addEventListener('load', showcaseLoader, true);

  //sidSelector.setAttribute('value', matSid);
  sidSelector.addEventListener('keyup', e => {
      if(e.applicationKey === "Enter"){
          matSid = sidSelector.value;
          console.log('je suis la')
          iframe.setAttribute('src', `${matSpace}${matSid}${params}`);
      }
  });
})



function showcaseLoader(){
    let sdk 
  try{
    //sdk= iframe.contentwindow.MP_SDK.connect(iframe, applicationKey, '3.6')
    iframe.contentWindow.MP_SDK.connect(iframe, applicationKey, '3.6')
      .then(loadedShowcaseHandler)

      .catch(console.error);
  } catch(e){
      console.error(e);
      
  }
}

function populateTags(tags, sort='label'){
  const curTags = document.querySelectorAll('.scrollable tbody tr')
  curTags.forEach((tag) => {
      tag.remove();
  });
  tags.forEach(addToTable);
}

function addToTable(tag){
  let elem;
  let row;
  if(table_container && table_container.children[0] && table_container.children[0].tagName == 'THEAD'){
      table_container = table_container.appendChild(document.createElement('TBODY'));
  }

  table_container.appendChild(row = document.createElement('tr'));
  row.setAttribute('id', `${tag.sid}`);

  // Label
  row.appendChild(elem = document.createElement('tr'));
  elem.setAttribute('id', 'label')
  elem.innerText = `${tag.label}`;

  // Description
  row.appendChild(elem = document.createElement('td'));
  elem.setAttribute('id', 'description')
  elem.innerText = `${tag.description}`;

  //cat
  row.appendChild(elem = document.createElement('td'));
  elem.setAttribute('id','cat')
  elem.textContent = `${tag.description}`

  //sous_cat 
  row.appendChild(elem = document.createElement('td'));
  elem.setAttribute('id','description')
  elem.textContent = `${tag.description}`

  //nature_mat
  row.appendChild(elem = document.createElement('td'));
  elem.setAttribute('id','description')
  elem.textContent = `${tag.description}`

  // Color
  row.appendChild(elem = document.createElement('td'));
  elem.setAttribute('id', 'color')
  elem.appendChild(elem = document.createElement('div'));
  elem.setAttribute('style', `background-color: rgb(${tag.color.r * 255}, ${tag.color.g * 255}, ${tag.color.b * 255});`);

  // Goto link
  row.appendChild(elem = document.createElement('td'));
  elem.setAttribute('id', 'goto');
  elem.appendChild(document.createElement('div'));

  // Delete
  row.appendChild(elem = document.createElement('td'));
  elem.setAttribute('id', 'icon');
  elem.appendChild(document.createElement('div'));

  return row;
}

function loadedShowcaseHandler(mpSdk){
  console.log('je suis en lighe 180')
  

    
  ///////////////////////////////////
    ////////////////////////////////////////////////test///////////////////
    function t(){
        
        /*//les étages
        mpSdk.Floor.getData()
      .then(function(floors) {
        // Floor data retreival complete.
        console.log('Current floor: ' + floors.currentFloor);
        console.log('Total floos: ' + floors.totalFloors);
        console.log('Name of first floor: ' + floors.floorNames[0]);
      })
      .catch(function(error) {
        // Floors data retrieval error.
      });*/
      /*//move floors
      mpSdk.Floor.moveTo(0)
  .then(function(floorIndex) {
    // Move to floor complete.
    console.log('Current floor: ' + floorIndex);
  })
  .catch(function(error) {
    // Error moving to floor.
  });*/
  /*show all floor
  mpSdk.Floor.showAll()
  .then(function(){
    console.log('Show floors complete');
  })
  .catch(function(error) {
    // Error displaying all floors.
  });*/

  //la prise de vue
  //const mode = mpSdk.Mode.Mode.FLOORPLAN;mode.dollhouse*/
  
  const mode = mpSdk.Mode.Mode.FLOORPLAN;
const position = {x: 5, y: 0, z: 0};
const rotation = {x: -90, y: 0};
const transition = mpSdk.Mode.TransitionType.FLY;
const zoom = 5;

mpSdk.Mode.moveTo(mode, {
    position: position,
    rotation: rotation,
    transition: transition,
    zoom,
  })
  .then(function(nextMode){
    // Move successful.
    console.log('Arrived at new view mode ' + nextMode);
  })
  .catch(function(error){
    // Error with moveTo command
  });
  /*//info
  mpSdk.Model.getDetails()
  .then(function(modelDetails) {
    // Model details retreival complete.
    console.log('Model sid:' + modelDetails.sid);
    console.log('Model name:' + modelDetails.name);
    console.log('Model summary:' + modelDetails.summary);
  })
  .catch(function(error) {
    // Model details retrieval error.
  });*/

  /*
  const screenPosition = {x: 0, y: 0}; // Top left corner of the screen

mpSdk.Renderer.getWorldPositionData(screenPosition)
.then(function(data){
   const worldPosition = data.position; // e.g. {x: 2.2323231, y: 4.7523232, z; 7.92893};
   const floor = data.floor; // e.g. 2
   console.log(floor);
   console.log(worldPosition);
}); 
var m=new Image;
mpSdk.Renderer.takeEquirectangular()
  .then(function (screenShotUri) {
    // set src of an img element
    m.src = screenShotUri;
    window.win=open(m.src);
});*/
console.log('aaaa')
var r;
document.getElementById("nationalite").addEventListener("change", function (e) {
    console.log("Code de nationalité : " + e.target.value);
});
/*
mpSdk.Tour.getData()
  .then(function(snapshots) {r=snapshots;console.log('je suis a tour',r);
    //Tour getData complete.
    if(snapshots.length > 0){
      console.log('First snapshot sid: ' + snapshots[0].sid);
      console.log('First snapshot name: ' + snapshots[0].name);
      console.log('First snapshot position: ' + snapshots[0].position);
    }
  })
  .catch(function(error) {
    // Tour getData error.
  });*/
    };
    testBtn.addEventListener('click',()=>{t();console.log('test1')})
       
  ////////////////////////////////
    
  ///
  let addingTag = false;
  let movingTag = false;
  var poseCache;

  // Fetch tags 
  mpSdk.Mattertag.getData()
  .then( (tags) => {
      mattertags = tags;
      populateTags(tags);
      setupTagFunctionality();
  })
  .catch(console.error);

  function placeTag(){
      if(tag) mpSdk.Mattertag.navigateToTag(tag, mpSdk.Mattertag.Transition.INSTANT);
      tag = null;
      movingTag = false;
  }

  if(!isFirefox){
    console.log('je suis firefox');
      

      focusDetect();
  }
 
  function focusDetect(){
      const eventListener = window.addEventListener('blur', function() {
          if (document.activeElement === iframe) {
         

            placeTag(); //function you want to call on click
            setTimeout(function(){ window.focus(); }, 0);
          }
          window.removeEventListener('blur', eventListener );
      });
  }

  function overlayDetect(){
      if(tag){
          const overlay = document.createElement('div');
          overlay.setAttribute('class', 'click-overlay');
          overlay.addEventListener('mousemove', e => {
              mpSdk.Renderer.getWorldPositionData({
                  x: e.clientX - 30,
                  y: e.clientY - 5
              })
              .then(data =>{
                  updateTagPos(data.position); 
              })
              .catch(e => {
                  console.error(e);
                  placeTag();
              });
              
          });
          overlay.addEventListener('click', e => {
              //affiche();
              placeTag();
              overlay.remove();
          });
          container.insertAdjacentElement('beforeend', overlay);
      }
  }

  function updateTagPos(newPos, newNorm=undefined, scale=undefined){
      if(!newPos) return;
      if(!scale) scale = .33;
      if(!newNorm) newNorm = {x: 0, y: 1, z: 0};

      mpSdk.Mattertag.editPosition(tag, {
          anchorPosition: newPos,
          stemVector: {
              x: scale * newNorm.x,
              y: scale * newNorm.y,
              z: scale * newNorm.z,
          }
      })
      .catch(e =>{
          console.error(e);
          tag = null;
          movingTag = false;
      });
  }
    
  mpSdk.Pointer.intersection.subscribe(intersectionData => {
      if(tag && !movingTag){
          if(intersectionData.object === 'intersectedobject.model' || intersectionData.object === 'intersectedobject.sweep'){
              updateTagPos(intersectionData.position, intersectionData.normal);
          }
      }
  });
  //ScreenShot ////////////////////////////////////////////////////////

  const resolution = {
    width: 600,
    height: 800
  };
  const visibility = {
    mattertags: false,
    sweeps: true
  };
  function Screen(){  
    var img =new Image();
    mpSdk.Renderer.takeScreenShot(resolution, visibility)
    .then(function (screenShotUri) {
    img.src = screenShotUri;
    window.win =open(img.src);
    });
    }
    aa=Screen();
  ScreenBtn.addEventListener('click',() => {Screen();});
  //fin Screen


  //dawnload function 
    function downloadimg(){
        var img =new Image();
        img.crossOrigin = "Anonymous";
        img.addEventListener("load", imageReceived, false);
        mpSdk.Renderer.takeScreenShot(resolution, visibility)
        .then(function (screenShotUri) {
        img.src = screenShotUri;}); 
        //downloadedImg.src = imageURL;
          
    }

  //fin dawnload function
  //downloadBtn.addEventListener('click',() =>{console.log('test0')/*downloadimg();*/}); 


  addTagBtn.addEventListener('click', () => {
      if(!addingTag && !tag){
          addingTag = true;
          mpSdk.Mattertag.add([{
              label: "Matterport Tag",
              description: "",
              anchorPosition: {x: 0, y: 0, z: 0},
              stemVector: {x:0, y: 0, z: 0},
              color: {r:0 , g: 0, b: 1},
          }])
          .then((sid) => {
              tag = sid[0];
              console.log(sid)///////////////////////////////////////////////////////
              return mpSdk.Mattertag.getData();
          })
          .then( (collection) => {
              const t_sid = collection.find( elem => elem.sid === tag);
              const row = addToTable(t_sid);
              
              addTagListeners(row);
              addingTag = false;
          })
          .then(() => {
              if(isFirefox){console.log('isfirefox') ;overlayDetect()};
          })
          .catch( (e) => {
              console.error(e);
              addingTag = false;
          })
      }
  });

  function replaceShowcaseTags(tags){
      return mpSdk.Mattertag.getData()
      .then(oldTags => {
          oldTagSids = oldTags.map(oldTag => oldTag.sid);
          return mpSdk.Mattertag.remove(oldTagSids);
      })
      .then( () => {
          tags.forEach(tag => {
              tag.media.type = "mattertag.media." + tag.media.type
          });
          return mpSdk.Mattertag.add(tags);
      })
      .then(newSids => {
          tags.forEach( (tag, i) => tag.sid = newSids[i]);
          return tags;
      })
      .catch(e  => {
          console.error(`${e}: ${tags}`);
      });
  }

  importBtn.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      let file;
      input.onchange = e => {
          file = e.target.files[0];
          importFile(file);
      }
      setTimeout( () => {input.click();}, 100);
  });

  removeBtn.addEventListener('click', () => {
      removeAllTags();
  })

  function importFile(file){
      if(file.type === "application/json"){
          const reader = new FileReader();
          reader.readAsText(file);

          reader.addEventListener('load', e => {
              const content = e.target.result;
              tags = JSON.parse(content);
              replaceShowcaseTags(tags)
              .then((newTags) => {
                  populateTags(newTags);
                  setupTagFunctionality();
              })
              .catch(console.error);
          });
      }else{
          window.alert("Please select a .json filetype");
      }
  }

  // from https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
  // Function to download data to a file
  function download(data, filename, type) {
      const file = new Blob([data], {type: type});
      if (window.navigator.msSaveOrOpenBlob) // IE10+
          window.navigator.msSaveOrOpenBlob(file, filename);
      else { // Others
          const a = document.createElement("a"),
                  url = URL.createObjectURL(file);
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          setTimeout(function() {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);  
          }, 0); 
      }
  }

  function removeAllTags(){
      mpSdk.Mattertag.getData()
      .then(tags => {
          return tags.map(tag => tag.sid);
      })
      .then(tagSids => {
          return mpSdk.Mattertag.remove(tagSids)
      })
      .catch(console.error);

      document.querySelectorAll('tr').forEach( block =>{
          if(!block || block.children[0].tagName == 'TH') return;
          block.parentNode.removeChild(block);
      });
  }

  function exportTags(tags){
      if(!tags || tags.length == 0){alert('NO tags');} // TODO: Let the user know there are no tags
      const filename = 'tags.json';
      const tagsText = JSON.stringify(tags);
      download(tagsText, filename, "application/json");
  }

  exportBtn.addEventListener('click', () => {
      
      mpSdk.Mattertag.getData()
      .then(exportTags);
  });
  
  //je reviens la 
  function updateTag(matTagId, label=null, description=null){
      if(!label && !description) return;

      const props = new Object();
      label ? props['label'] = label : {};
      description ? props['description'] = description : {};
      mpSdk.Mattertag.editBillboard(matTagId, props)
      .catch( (e) => { console.error(e); });
  }



  function changeInfo(ele, tagId){
      if(ele.tagName === 'TH'){ return; }
      const desc = ele.innerText;
    
      const change = document.createElement('input');
      change.id = tagId;
      change.value = desc;
      ele.replaceWith(change);
      change.focus();
      change.addEventListener('blur', (e) => {
          clickAway(change, tagId);
      });
      change.addEventListener('keydown', (e) => {
          if(e.key == "Enter"){
              change.blur();
          }
      });
  }


  //test function
  var info= [];


  
  function clickAway(ele, tagId) {
    //let desc = ele.value;
    let desc=ele.value ;
    let descp=ele.value;
    let desccat=ele.value;
    let descsouscat=ele.value;
    let descnature=ele.value;

    const change = document.createElement('td');
    change.id = tagId;
    if (tagId ==='label') {change.innerText = desc;ele.replaceWith(change);};
    if (tagId ==='description'){change.innerText = descp;ele.replaceWith(change);};
    if (tagId ==='catégorie'){change.innerText = desccat;ele.replaceWith(change);};
    if (tagId ==='sous_catégorie'){change.innerText = descsouscat;ele.replaceWith(change);};
    if (tagId ==='nature'){change.innerText = descnature;ele.replaceWith(change);};
    //change.innerText = desc;

    // ele.replaceWith(change);
    change.removeEventListener('blur', clickAway);
    
    const lbl = tagId === 'label' ? desc : null;
    descp = tagId === 'description' ? descp : null;
    desccat = tagId === 'catégorie' ? desccat : null;
    descsouscat = tagId === 'sous_catégorie' ? descsouscat : null;
    descnature = tagId === 'nature' ? descnature : null;
    var t =0;
    if (tagId === 'label'){info ='';t=t+1}  ;
    if (tagId ==='description'){info=info+'\n'+tagId+ ' :'+ descp;t=t+1};
    if (tagId ==='catégorie'){info=info +'\n'+tagId+ ' :' +desccat;t=t+1};
    if (tagId ==='sous_catégorie'){info=info +'\n'+tagId+' :' +descsouscat;t=t+1};
    if (tagId ==='nature'){info = info +'\n'+tagId+' :'+ descnature;t=t+1};
    if (t===1 ){updateTag(change.parentElement.id, label=lbl, description=info);};
    change.addEventListener('click', () =>{
        changeInfo(change, tagId);
    });
    return info ;
};

  info = clickAway(ele, tagId);
  console.log(info);

  function addTagListeners(block){
      if(!block || block.children[0].tagName == 'TH'){ return; }
      // Label
      block.children[0].addEventListener('click', () => {
          changeInfo(block.children[0], tagId='label');
      });

      // Description
      block.children[1].addEventListener('click', () => {
          changeInfo(block.children[1], tagId='description');   
      });

      //cat
      block.children[2].addEventListener('click', () => {
        changeInfo(block.children[2], tagId='catégorie');  
      });

      //sous_cat
      block.children[3].addEventListener('click', () => {
        changeInfo(block.children[3], tagId='sous_catégorie' ); 
      });

      //nature_mat
      block.children[4].addEventListener('click', () => {
        changeInfo(block.children[4], tagId='nature');
      });
    


      // arrow icon
      block.children[6].addEventListener('click', () => {
          mpSdk.Mattertag.navigateToTag(block.id, mpSdk.Mattertag.Transition.FADEOUT)
          .catch((e) => { console.error(e); });
      });
  
      // delete icon
      block.children[7].addEventListener('click', () => {
          block.parentNode.removeChild(block);
          mpSdk.Mattertag.remove(block.id)
          .catch((e) => { console.log(e); });
      });
      info =[];
  }

  //function button infos

  function pointToString(point) {
    var x = point.x.toFixed(3)
    var y = point.y.toFixed(3)
    var z = point.z.toFixed(3)

    return '{x: ${x}, y: ${y}, z: ${z} }';
        
  }
  
 

var poseCache;
mpSdk.Camera.pose.subscribe(function(pose) {
    poseCache = pose;
});

var intersectionCache;
mpSdk.Pointer.intersection.subscribe(function(intersection) {
    //console.log(intersection);
    intersectionCache = intersection;
    intersectionCache.time = new Date().getTime();
    buttonn.style.display = 'none';
    buttonnDisplayed = false ;
});

var delayBeforeShow = 1000;
var buttonnDisplayed = false;
setInterval(() => {
    if (!intersectionCache || !poseCache) {
    return;
    }

    const nextShow = intersectionCache.time + delayBeforeShow;
    if (new Date().getTime() > nextShow) {
    if (buttonnDisplayed) {
        return;
    }

    var size = {
        w: iframe.clientWidth,
        h: iframe.clientHeight,
    };
    var coord = mpSdk.Conversion.worldToScreen(intersectionCache.position, poseCache, size);
    console.log(coord);
    buttonn.style.left = `${coord.x -22}px`;
    buttonn.style.top = `${coord.y -25 }px`;
    buttonn.style.display = 'block';
    buttonnDisplayed = true;

    console.log(buttonnDisplayed);}
}, 16);
buttonn.addEventListener('click', function() {
    text.innerHTML = `position: ${pointToString(intersectionCache.position)}\nnormal: ${pointToString(intersectionCache.normal)}\nfloorId: ${intersectionCache.floorId}`;
    buttonn.style.display = 'none';
    iframe.focus({preventScroll:true});
    });

  function setupTagFunctionality(){
      document.querySelectorAll('tr').forEach(addTagListeners);
  }




}







/*window.SHOWCASE_SDK.connect(showcaseFrame, '8nrbhb0ru7ff6hunry5edgpfb' , '3.2')
  .then(function(sdk) {
    alert('SDK Connected!');


    // Your Matterport SDK application starts here .


    sdk.Model.getData().then(function(modelData){
      console.log('Model data loaded for sid:', modelData.sid);
      console.log(modelData);}


    );
    sdk.Floor.getData()
  .then(function(floors) {
    // Floor data retreival complete.
    console.log('Current floor: ' + floors.currentFloor);
    console.log('Total floos: ' + floors.totalFloors);
    console.log('Name of first floor: ' + floors.floorNames[0]);
  })
  .catch(function(error) {
    // Floors data retrieval error.
  });
  sdk.Mattertag.add([{
    label: "tag_test",
    description : (a.concat("\n",b)).concat('\n',c) ,
    anchorPosition: {
      x: 0,
      y: 0,
      z: 0,
    },
    stemVector: { // make the Mattertag stick straight up and make it 0.30 meters (~1 foot) tall
      x: 0,
      y: 0.6,
      z: 0,
    },
    color: { // blue disc
      r: 1.0,
      g: 0.5,
      b: 1.0,
    },
    floorId:0, // optional, if not specified the sdk will provide an estimate of the floor id for the anchor position provided.

    
   }])
  
  

})
  
  .catch(function(error) {
    console.error(error);
  });

*/
//DOMContentLoaded