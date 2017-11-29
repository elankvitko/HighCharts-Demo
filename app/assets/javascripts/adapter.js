function adaptData(data) {
  var adaptedData = [];
  for (var i = 0; i < data.length; ++i) {
    var d = new Date(data[i][0]);
    adaptedData.push([
      Date.UTC(d.getYear(), d.getMonth(), d.getDate()),
      data[i][1]
    ]);
  }
  return adaptedData;
}
