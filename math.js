const calc = (method, x, y) => {
  if (method.toLowerCase()=="add")
      {
        return { operation: '+', result: x + y };   
      }
    else if (method.toLowerCase()=="subtract")
      {
        return { operation: '-', result: x - y };   
      }
   else if (method.toLowerCase()=="multiply")
      {
        return { operation: 'X', result: x * y };   
      }
    else if (method.toLowerCase()=="divide")
      {
        return { operation: '/', result: x / y };   
      }
    else
    {
        return 'This is not a valid option';
    }
    
};

const correctOptions = ['add', 'subtract', 'multiply', 'divide'];

const calcRoute = (request, response) => {
  request.query.x = parseInt(request.query.x); // Parse string value of x into an integer
  request.query.y = parseInt(request.query.y); // Parse string value of y into an integer

  const { method, x, y } = request.query; // Destructure out method, x, y from request.query

  // tell user that x and y must be a number.
  if (isNaN(y) || isNaN(x)) {
    return response.send(' X and Y should be a number');
  }

  // method is not in our valid options - tell them it has to be and display them
  if (!correctOptions.includes(method.toLowerCase())) {
    return response.send(
      `Method must include one of the following: ${correctOptions.join(', ')}`
    );
  }

  
  const { operation, result } = calc(method, x, y);

  response.send(`${x} ${operation} ${y} = ${result}`); // Prints out value 
};

module.exports = calcRoute; 
