// Define a function that will create metadata for given sample
function buildMetadata(selection) {

    // Read the json data
    d3.json("samples.json").then((sampleData) => {

        console.log(sampleData);
        
    // Parse and filter the data to get the sample's metadata
    var parsedData = sampleData.metadata;
    console.log("parsed data inside buildMetadata function")
    console.log(parsedData);

    var sample = parsedData.filter(item => item.id == selection);
    console.log("showing sample[0]:");
    console.log(sample[0]);