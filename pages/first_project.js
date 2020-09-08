const firstProject = `
    <div class="background-image:url('assets/Wood.jpg'); background-repeat:no-repeat; background-attachment:fixed; background-size:cover;">
    <div id="Magcover" style="position:absolute; top:80px; left:100px;">
        <img src="assets/Newcover.jpg">
	</div>
	<div id="Red" style="position:absolute; top:400px; 
	left:100px; width:300px; height:30px; background:#780000; opacity:0;
	 transition:.5s;" onmouseover="this.style.opacity='.3'" 
	onmouseout="this.style.opacity='0'" onclick="getElementById('Pageone').style.opacity='1'; getElementById('Pageone').style.zIndex='5'; this.style.opacity='0';
	getElementById('Ezy').style.opacity='0'; getElementById('Ezy').style.zIndex='0';
	getElementById('Sanyo').style.opacity='0'; getElementById('Sanyo').style.zIndex='0';
	getElementById('Kelvinator').style.opacity='0'; getElementById('Kelvinator').style.zIndex='0';
	getElementById('Condura').style.opacity='0'; getElementById('Condura').style.zIndex='0';
	getElementById('Verdict').style.opacity='0'; getElementById('Verdict').style.zIndex='0';">
    </div>
	<div id="Pageone" style="position:absolute; top:80px; left:860px; width:500px; height:800px; opacity:0; transition:z-index 0s; transition:opacity 1s;" onclick="this.style.opacity='0';  this.style.zIndex='0'">
       
         <img src="assets/Editor.jpg" style="position:absolute; top:0px; left:0px; width:700px; height:990px;">
    </div>
  
    <div id="RedCondura" style="position:absolute; top:480px; 
	left:100px; width:380px; height:30px; background:#780000; opacity:0;
	 transition:.5s;" onmouseover="this.style.opacity='.3'" 
	onmouseout="this.style.opacity='0'" onclick="getElementById('Condura').style.opacity='1'; getElementById('Condura').style.zIndex='5'; this.style.opacity='0';
	getElementById('Ezy').style.opacity='0'; getElementById('Ezy').style.zIndex='0';
	getElementById('Sanyo').style.opacity='0'; getElementById('Sanyo').style.zIndex='0';
	getElementById('Kelvinator').style.opacity='0'; getElementById('Kelvinator').style.zIndex='0';
	getElementById('Verdict').style.opacity='0'; getElementById('Verdict').style.zIndex='0';
	getElementById('Pageone').style.opacity='0'; getElementById('Pageone').style.zIndex='0';">
    </div>
	<div id="Condura" style="position:absolute; top:80px; left:860px; width:500px; height:800px; opacity:0; transition:z-index 0s; transition:opacity 1s;" onclick="this.style.opacity='0';  this.style.zIndex='0'">
          <img src="assets/Condura.jpg" style="position:absolute; top:0px; left:0px; width:700px; height:990px;">
    </div>
    
    <div id="RedKelvinator" style="position:absolute; top:560px; 
	left:100px; width:510px; height:30px; background:#780000; opacity:0;
	 transition:.5s;" onmouseover="this.style.opacity='.3'" 
	onmouseout="this.style.opacity='0'" onclick="getElementById('Kelvinator').style.opacity='1'; getElementById('Kelvinator').style.zIndex='5'; this.style.opacity='0';
	getElementById('Ezy').style.opacity='0'; getElementById('Ezy').style.zIndex='0';
	getElementById('Sanyo').style.opacity='0'; getElementById('Sanyo').style.zIndex='0';
	getElementById('Verdict').style.opacity='0'; getElementById('Verdict').style.zIndex='0';
	getElementById('Condura').style.opacity='0'; getElementById('Condura').style.zIndex='0';
	getElementById('Pageone').style.opacity='0'; getElementById('Pageone').style.zIndex='0';">
    </div>
	<div id="Kelvinator" style="position:absolute; top:80px; left:860px; width:500px; height:800px; opacity:0; transition:z-index 0s; transition:opacity 1s;" onclick="this.style.opacity='0';  this.style.zIndex='0'">
          <img src="assets/Kelvinator.jpg" style="position:absolute; top:0px; left:0px; width:700px; height:990px;">
    </div>
  
   <div id="RedSanyo" style="position:absolute; top:640px; 
	left:100px; width:300px; height:30px; background:#780000; opacity:0;
	 transition:.5s;" onmouseover="this.style.opacity='.3'" 
	onmouseout="this.style.opacity='0'" onclick="getElementById('Sanyo').style.opacity='1'; getElementById('Sanyo').style.zIndex='5'; this.style.opacity='0';
	getElementById('Ezy').style.opacity='0'; getElementById('Ezy').style.zIndex='0';
	getElementById('Verdict').style.opacity='0'; getElementById('Verdict').style.zIndex='0';
	getElementById('Kelvinator').style.opacity='0'; getElementById('Kelvinator').style.zIndex='0';
	getElementById('Condura').style.opacity='0'; getElementById('Condura').style.zIndex='0';
	getElementById('Pageone').style.opacity='0'; getElementById('Pageone').style.zIndex='0';">
    </div>
	<div id="Sanyo" style="position:absolute; top:80px; left:860px; width:500px; height:800px; opacity:0; transition:z-index 0s; transition:opacity 1s;" onclick="this.style.opacity='0';  this.style.zIndex='0'">
        <img src="assets/Sanyo.jpg" style="position:absolute; top:0px; left:0px; width:700px; height:990px;">
    </div>
  
  <div id="RedEzy" style="position:absolute; top:720px; 
	left:100px; width:300px; height:30px; background:#780000; opacity:0;
	 transition:.5s;" onmouseover="this.style.opacity='.3'" 
	onmouseout="this.style.opacity='0'" onclick="getElementById('Ezy').style.opacity='1'; getElementById('Ezy').style.zIndex='5'; this.style.opacity='0';
	getElementById('Verdict').style.opacity='0'; getElementById('Verdict').style.zIndex='0';
	getElementById('Sanyo').style.opacity='0'; getElementById('Sanyo').style.zIndex='0';
	getElementById('Kelvinator').style.opacity='0'; getElementById('Kelvinator').style.zIndex='0';
	getElementById('Condura').style.opacity='0'; getElementById('Condura').style.zIndex='0';
	getElementById('Pageone').style.opacity='0'; getElementById('Pageone').style.zIndex='0';">
    </div>
	<div id="Ezy" style="position:absolute; top:80px; left:860px; width:500px; height:800px; opacity:0; transition:z-index 0s; transition:opacity 1s;" onclick="this.style.opacity='0';  this.style.zIndex='0'">
        <img src="assets/Ezy.jpg" style="position:absolute; top:0px; left:0px; width:700px; height:990px;">
    </div>

 <div id="RedVerdict" style="position:absolute; top:800px; 
	left:100px; width:300px; height:30px; background:#780000; opacity:0;
	 transition:.5s;" onmouseover="this.style.opacity='.3'" 
	onmouseout="this.style.opacity='0'" onclick="getElementById('Verdict').style.opacity='1'; 
	getElementById('Verdict').style.zIndex='5'; this.style.opacity='0'; 
	getElementById('Ezy').style.opacity='0'; getElementById('Ezy').style.zIndex='0';
	getElementById('Sanyo').style.opacity='0'; getElementById('Sanyo').style.zIndex='0';
	getElementById('Kelvinator').style.opacity='0'; getElementById('Kelvinator').style.zIndex='0';
	getElementById('Condura').style.opacity='0'; getElementById('Condura').style.zIndex='0';
	getElementById('Pageone').style.opacity='0'; getElementById('Pageone').style.zIndex='0';">
    </div>
	<div id="Verdict" style="position:absolute; top:80px; left:860px; width:500px; height:800px; opacity:0; 
	transition:z-index 0s; transition:opacity 1s;" onclick="this.style.opacity='0'; this.style.zIndex='0'">
       <img src="assets/Finalverdict.jpg" style="position:absolute; top:0px; left:0px; width:700px; height:990px;">
    </div>
    
        <div id="RedSources" style="position:absolute; top:870px; 
	left:100px; width:200px; height:30px; background:#780000; opacity:0;
	 transition:.5s;" onmouseover="this.style.opacity='.3'" 
	onmouseout="this.style.opacity='0'" onclick="getElementById('Sources').style.opacity='1'; 
	getElementById('Sources').style.zIndex='5'; this.style.opacity='0'; 
	getElementById('Verdict').style.opacity='0'; getElementById('Verdict').style.zIndex='0';
	getElementById('Ezy').style.opacity='0'; getElementById('Ezy').style.zIndex='0';
	getElementById('Sanyo').style.opacity='0'; getElementById('Sanyo').style.zIndex='0';
	getElementById('Kelvinator').style.opacity='0'; getElementById('Kelvinator').style.zIndex='0';
	getElementById('Condura').style.opacity='0'; getElementById('Condura').style.zIndex='0';
	getElementById('Pageone').style.opacity='0'; getElementById('Pageone').style.zIndex='0';">
    </div>
	<div id="Sources" style="position:absolute; top:80px; left:860px; width:500px; height:800px; opacity:0; transition:1s; z-index:0" onclick="this.style.opacity='0'; 
    getElementById('RedSources').style.zIndex='5'">
        <img src="assets/Sources.jpg" style="position:absolute; top:0px; left:0px; width:760px; height:990px;">
    </div>
    </div>
`