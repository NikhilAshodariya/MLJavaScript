var mlAlgorithms = require('jsmachinelearning');

var model = new mlAlgorithms.MultipleLinearRegression();

x = [
  [1, 2],
  [4, 2],
  [6, 3],
  [2, 3],
  [5, 1]
]
y=[1,2,3,2,5];
model.fit(x,y)
k = model.predict([[1,2],[4,2]]);
console.log(k);
