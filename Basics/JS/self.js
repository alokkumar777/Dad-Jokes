function newConnections() {
  let newConn = [
    ["G", "A", "L", "V"],
    ["J", "K", "M", "N", "P"],
  ];

  for (let row of newConn) {
    for (let frnd of row) {
      console.log(frnd);
    }
    console.log("----------");
    // console.log(row)
  }
}

// calling
newConnections();




