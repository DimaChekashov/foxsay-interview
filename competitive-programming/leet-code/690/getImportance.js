var getImportance = function(employees, id) {
    const adjList = new Map()
    
    for(let {id, ...rest} of employees) {
        adjList.set(id, rest);
    }
    
    function callDFS(node) {
        let sum = adjList.get(node).importance;
        
        for(let next of adjList.get(node).subordinates) {
            sum += callDFS(next);
        }
        return sum;
    }
    return callDFS(id)    
};