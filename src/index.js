// You should implement your task here.

module.exports = function towelSort (matrix) {
  return Array.isArray(matrix) && matrix.length > 0
        ? (result = matrix.flatMap((elem, i) => i % 2 === 0 ? elem : elem.reverse()))
        : [];
}
