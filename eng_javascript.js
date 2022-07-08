const CampoGranTime=  0;
const EntreCampTime= 15;
const CampoPenqTime= 30;
const SaldanhaTime= 60;
const ParqueEduTime= 120;
const MarquesTime=200;
const AmoreirasTime=240;
const SantosTime=300;
const LxFactoryTime= 350;
const MaatTime=400;
const BelemTime= 420;



CampoGrand = document.getElementById('CampoGrand');
EntreCampos = document.getElementById('EntreCampos');
CampoPenqueno = document.getElementById('CampoPenqueno');
Saldanha = document.getElementById('Saldanha');
ParqueEduardo = document.getElementById('ParqueEduardo');
Marques = document.getElementById('Marques');
Amoreiras = document.getElementById('Amoreiras');
Santos = document.getElementById('Santos');
LxFactory = document.getElementById('LxFactory');
Maat = document.getElementById('Maat');
Belem = document.getElementById('Belem');


MapGif = document.getElementById('MapGif');
BelemVideo = document.getElementById('BelemVideo');
audio = document.getElementById('audio');
source = document.getElementById('audioSource');
source.src = elm.getAttribute('data-value');

if(location.hash != ''){
  //console.log(location.hash);
  place = location.hash.replace('#','');
  eval(place);

}


BelemVideo.ontimeupdate = function() {UpdateImage()};

function UpdateImage(){
  //console.log(MapGif.src)
  if (CampoGranTime < BelemVideo.currentTime && BelemVideo.currentTime < EntreCampTime){
    showCampoGrand();
      
  }
  
  else if (EntreCampTime <= BelemVideo.currentTime && BelemVideo.currentTime <CampoPenqTime){
    
    showEntreCampos();
  }
  else if (CampoPenqTime <= BelemVideo.currentTime && BelemVideo.currentTime <SaldanhaTime){
    showCampoPenqueno();
    
  }
 
  else if (SaldanhaTime <= BelemVideo.currentTime && BelemVideo.currentTime <ParqueEduTime){
    showSaldanha();
  
  }
  else if (ParqueEduTime <= BelemVideo.currentTime && BelemVideo.currentTime <MarquesTime){
    showParqueEduardo();
  
  }
  else if (MarquesTime <= BelemVideo.currentTime && BelemVideo.currentTime <AmoreirasTime){
    showMarques();
  
  }
  else if (AmoreirasTime <= BelemVideo.currentTime && BelemVideo.currentTime <SantosTime){
    showAmoreiras();
  
  }
  else if (SantosTime <= BelemVideo.currentTime && BelemVideo.currentTime <MaatTime){
    showSantos();
  
  }
  else if (MaatTime <= BelemVideo.currentTime && BelemVideo.currentTime <BelemTime){
    showMaat();
  
  }
  else if (BelemTime <= BelemVideo.currentTime){
    showBelem();
  
  }



}


function showCampoGrand(){
    CampoGrand.style.display = "block";
    EntreCampos.style.display = "none";
    CampoPenqueno.style.display = "none";
    Saldanha.style.display = "none";
    ParqueEduardo.style.display = "none";
    Marques.style.display = "none";
    Amoreiras.style.display = "none";
    Santos.style.display = "none";
    LxFactory.style.display = "none";
    Maat.style.display = "none";
    Belem.style.display = "none";
    
    //This is hardcoded and will be different for each pc
    correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')
    
    
    audioSource.src= "Audio/eng/Campo_Grande_brit.mp3"

    if (correctedSrc === "/pictures_and_gifs/maps/Campo_v2.gif"){
    }else{
      BelemVideo.currentTime = CampoGranTime;
      MapGif.src = "pictures_and_gifs/maps/Campo_v2.gif";
    }
   
}

function showEntreCampos(){
  CampoGrand.style.display = "none";
  EntreCampos.style.display = "block";
  CampoPenqueno.style.display = "none";
  Saldanha.style.display = "none";
  ParqueEduardo.style.display = "none";
  Marques.style.display = "none";
  Amoreiras.style.display = "none";
  Santos.style.display = "none";
  LxFactory.style.display = "none";
  Maat.style.display = "none";
  Belem.style.display = "none";
  //audioSource.src= "/audioSource/EntreCampos_swedish.mp3"


  //This is hardcoded and will be different for each pc
  correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')
  audioSource.src= ""
  

    if (correctedSrc === "/pictures_and_gifs/maps/EntreCampo.gif"){
    }else{
      BelemVideo.currentTime = EntreCampTime;
      

      
      MapGif.src = "pictures_and_gifs/maps/EntreCampo.gif";
    }



  
 
}

function showCampoPenqueno(){
    CampoGrand.style.display = "none";
    EntreCampos.style.display = "none";
    CampoPenqueno.style.display = "block";
    Saldanha.style.display = "none";
    ParqueEduardo.style.display = "none";
    Marques.style.display = "none";
    Amoreiras.style.display = "none";
    Santos.style.display = "none";
    LxFactory.style.display = "none";
    Maat.style.display = "none";
    Belem.style.display = "none";

    correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')
    

    if (correctedSrc === "/pictures_and_gifs/maps/peq.gif"){
    }else{
      BelemVideo.currentTime = CampoPenqTime;
      audioSource.src= ""
      
      MapGif.src = "pictures_and_gifs/maps/peq.gif";
    }

   
}
function showSaldanha(){
  CampoGrand.style.display = "none";
  EntreCampos.style.display = "none";
  CampoPenqueno.style.display = "none";
  Saldanha.style.display = "block";
  ParqueEduardo.style.display = "none";
  Marques.style.display = "none";
  Amoreiras.style.display = "none";
  Santos.style.display = "none";
  LxFactory.style.display = "none";
  Maat.style.display = "none";
  Belem.style.display = "none";

  correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')
    
  audio.src= "Audio/eng/saldanha_brit.mp3"
  console.log(audio.src)

  if (correctedSrc === "/pictures_and_gifs/maps/Sal.gif"){
  }else{
    BelemVideo.currentTime = SaldanhaTime;
    audio.src= "Audio/eng/saldanha_brit.mp3"
    MapGif.src = "pictures_and_gifs/maps/Sal.gif";
  }

}

function showParqueEduardo(){
  CampoGrand.style.display = "none";
  EntreCampos.style.display = "none";
  CampoPenqueno.style.display = "none";
  Saldanha.style.display = "none";
  ParqueEduardo.style.display = "block";
  Marques.style.display = "none";
  Amoreiras.style.display = "none";
  Santos.style.display = "none";
  LxFactory.style.display = "none";
  Maat.style.display = "none";
  Belem.style.display = "none";

  correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')
    
  audio.src= "Audio/eng/ParqueEduardoVII_brit.mp3"
  console.log(audio.src)

  if (correctedSrc === "/pictures_and_gifs/maps/Parq.gif"){
  }else{
    BelemVideo.currentTime = ParqueEduTime;
    audio.src= "Audio/eng/ParqueEduardoVII_brit.mp3"

    MapGif.src = "pictures_and_gifs/maps/Parq.gif";
  }
 
}
function showMarques(){
  CampoGrand.style.display = "none";
  EntreCampos.style.display = "none";
  CampoPenqueno.style.display = "none";
  Saldanha.style.display = "none";
  ParqueEduardo.style.display = "none";
  Marques.style.display = "block";
  Amoreiras.style.display = "none";
  Santos.style.display = "none";
  LxFactory.style.display = "none";
  Maat.style.display = "none";
  Belem.style.display = "none";

  audio.src= "Audio/eng/MarquesDePompal_brit.mp3"

  correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')
    

  if (correctedSrc === "/pictures_and_gifs/maps/Marq.gif"){
  }else{
    BelemVideo.currentTime = MarquesTime;
    audio.src= "Audio/eng/MarquesDePompal_brit.mp3"

    MapGif.src = "pictures_and_gifs/maps/Marq.gif";
  }
 
}

function showAmoreiras(){
  CampoGrand.style.display = "none";
  EntreCampos.style.display = "none";
  CampoPenqueno.style.display = "none";
  Saldanha.style.display = "none";
  ParqueEduardo.style.display = "none";
  Marques.style.display = "none";
  Amoreiras.style.display = "block";
  Santos.style.display = "none";
  LxFactory.style.display = "none";
  Maat.style.display = "none";
  Belem.style.display = "none";


  correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')
  audio.src= "Audio/eng/Amoreiras_brit.mp3"

    

  if (correctedSrc === "/pictures_and_gifs/maps/Amodoras.gif"){
  }else{
    BelemVideo.currentTime = AmoreirasTime;
    audio.src= "Audio/eng/Amoreiras_brit.mp3"

    MapGif.src = "pictures_and_gifs/maps/Amodoras.gif";
  } 
}
function showSantos(){
  CampoGrand.style.display = "none";
  EntreCampos.style.display = "none";
  CampoPenqueno.style.display = "none";
  Saldanha.style.display = "none";
  ParqueEduardo.style.display = "none";
  Marques.style.display = "none";
  Amoreiras.style.display = "none";
  Santos.style.display = "block";
  LxFactory.style.display = "none";
  Maat.style.display = "none";
  Belem.style.display = "none";
  correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')

  audio.src= ""

  if (correctedSrc === "/pictures_and_gifs/maps/santos.gif"){
  }else{
    BelemVideo.currentTime = SantosTime;

    MapGif.src = "pictures_and_gifs/maps/santos.gif";
  }
 
}
function showLxFactory(){
  CampoGrand.style.display = "none";
  EntreCampos.style.display = "none";
  CampoPenqueno.style.display = "none";
  Saldanha.style.display = "none";
  ParqueEduardo.style.display = "none";
  Marques.style.display = "none";
  Amoreiras.style.display = "none";
  Santos.style.display = "none";
  LxFactory.style.display = "block";
  Maat.style.display = "none";
  Belem.style.display = "none";
  correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')

  audio.src= ""

  if (correctedSrc === "/pictures_and_gifs/maps/lx.gif"){
  }else{
    BelemVideo.currentTime = LxFactoryTime;
    MapGif.src = "pictures_and_gifs/maps/lx.gif";
  }
 
}
function showMaat(){
  CampoGrand.style.display = "none";
  EntreCampos.style.display = "none";
  CampoPenqueno.style.display = "none";
  Saldanha.style.display = "none";
  ParqueEduardo.style.display = "none";
  Marques.style.display = "none";
  Amoreiras.style.display = "none";
  Santos.style.display = "none";
  LxFactory.style.display = "none";
  Maat.style.display = "block";
  Belem.style.display = "none";
  correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')
  audio.src= "Audio/eng/Maat_brit.mp3"


  if (correctedSrc === "/pictures_and_gifs/maps/maat.gif"){
  }else{
    BelemVideo.currentTime = MaatTime;
    audio.src= "Audio/eng/Maat_brit.mp3"

    MapGif.src = "pictures_and_gifs/maps/maat.gif";
  }
 
}

function showBelem(){
  CampoGrand.style.display = "none";
  EntreCampos.style.display = "none";
  CampoPenqueno.style.display = "none";
  Saldanha.style.display = "none";
  ParqueEduardo.style.display = "none";
  Marques.style.display = "none";
  Amoreiras.style.display = "none";
  Santos.style.display = "none";
  LxFactory.style.display = "none";
  Maat.style.display = "none";
  Belem.style.display = "block";
  correctedSrc = MapGif.src.replace('file:///C:/Users/isabe/Documents/Multimedia','')

  audio.src= "Audio/eng/pasteis_belem_brit.mp3"

  if (correctedSrc === "/pictures_and_gifs/maps/belem.gif"){
  }else{
    BelemVideo.currentTime = BelemTime;
    audio.src= "Audio/eng/pasteis_belem_brit.mp3"


    MapGif.src = "pictures_and_gifs/maps/belem.gif";
  }
 
}
