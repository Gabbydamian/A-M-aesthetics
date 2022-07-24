// getTreatments();
// async function getTreatments() {
//   let response = await fetch('../../treatments.json');
//   let data = await response.json();
//   // console.log(data.treatments);
//   let [injectables, skin, body] = data.treatments;

//   let {
//     injectablesId,
//     injectablesName,
//     injectablesDescription,
//     injectablesImage,
//     injectablesTreatments,
//   } = injectables;
//   let { skinId, skinName, skinDescription, skinImage, skinTreatments } = skin;
//   let { bodyId, bodyName, bodyDescription, bodyImage, bodyTreatments } = body;

//   let [nose, chin, eyeBags] = injectablesTreatments;
//   let [acne, ageSpots, melasma] = skinTreatments;
//   let [cellulite, stretchMarks, skinTags] = bodyTreatments;

//   let {
//     noseId,
//     noseName,
//     noseShort,
//     noseLong,
//     noseImage,
//     noseTime,
//     noseDowntime,
//     noseDuration,
//     noseProcedure,
//     noseResults,
//     noseFaq,
//   } = nose;
//   console.log(injectablesTreatments);
// }

// //Destructuring is incomplete
