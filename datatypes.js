let variables = [123, "123", "123A", null, undefined, true, false, ""];

for (const [i, value] of variables.entries()) {
    console.log(`${i} : ${value} , Original Type: ${typeof value}`);
    console.log(`Number value: ${Number(value)}, Type: ${typeof Number(value)}`);
    console.log(`Boolean value: ${Boolean(value)}, Type: ${typeof Boolean(value)}`);
    console.log("\n")
  }


  