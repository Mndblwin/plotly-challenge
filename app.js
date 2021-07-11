// Define a function that will create metadata for given sample
function buildMetadata(selection) {

    // Read the json data
    d3.json("samples.json").then((sampleData) => {

        console.log(sampleData);