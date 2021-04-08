---
title: "Pedals"
date: 2018-11-18T12:33:46+10:00
featured: true
weight: 3
layout: project
---

I created a guitar effect pedal collection to showcase my skills in analog circuit design,
CAD design, and rendering.

* **Date:** 20.03.2020
* **Author:** Thomas Kimble
* **Field of Study:** Electrical Engineering, Design
* **Context:** Personal Project

# 3D Model

I created casing for each pedal using *Catia V5*, my go to CAD software. I then created more realistic textures in *Blender* and exported the models in the *.glb* format. Feel free to have a play around with the models shown below!

<script>

function nextPedal()
{

  var model = document.getElementById("model");
  if (model.src == "../../assets/models/Pedal1.glb") {
    model.src="../../assets/models/Pedal2.glb";
  } else if (model.src == "../../assets/models/Pedal2.glb"){
    model.src="../../assets/models/Pedal3.glb";
  } else if (model.src == "../../assets/models/Pedal3.glb"){
    model.src="../../assets/models/Pedal4.glb";
  } else if (model.src == "../../assets/models/Pedal4.glb"){
    model.src="../../assets/models/Pedal1.glb";
  }

  return false;
}

</script>

<model-viewer id="model" src="../../assets/models/Pedal1.glb" alt="A 3D model of pedal" auto-rotate camera-controls data-js-focus-visible></model-viewer>
<div class="strip">
  <div class="container pt-1">
    <div class="row justify-content-center">
      <div class="col-auto">
        <div onclick="nextPedal();" class="button_next">Random Pedal</div>
      </div>
    </div>
  </div>
</div>

<br/>

Omnis est signa cum nec inplevit vivit et insania Orpheu, an abit. Nimbi
subversaque et micant suumque, tibi ipse; sed. **Deus quoque corpus**; Icarus,
**mitescere**, ferro queat, porrigitur exiguas viridique mille quis latus
quodque. Non una genuisse ullis efficiet ad corpore nunc mentesque praestant?

_Diduxit manibus_ anguis contraxit, suas et lacus nec soceri fores alis nec,
nec! Data pater Perseu minanti animam operitur illa dolorem.

Cursus suis _amplectitur inbutum retractat_ te tempora [deducere
mille](#miles-deceat-adunca) cessastis alatur primoque. Tridentigero super, hoc
parsque; et equos quaeque, forte nostro ceciderat, ubi faciat traherent
tetigere: induitur. Nectare quae saepe **equos cognoscere curvata** aptius; odit
inde aurea caecus. Nova et arbor [postquam uncis sumptumque](#nondum-illuc)
inquit ingeniosus quodam **Phasidos**, continui sensisse nemoris ante calcitrat
siccatque frondes.

Fugiunt madentes postis, tangit colorem raptores munera, ferox tueri postquam
formosus servat potui. Luce ebur, pulcherrimus plus tradere! _Quam perque
semper_?
