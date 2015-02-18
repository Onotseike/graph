// JavaScript source code
//Author Paula Aliu
//Graph class

var graph = {
    nodes: [1],
    edges: [],
    pos_lines: [],
    //Add a single node.
    add_node: function (num) {
        this.nodes.push(num);
        console.log(this.nodes);
    },
    //Add a single edge.
    add_edge: function (edge_pair) {
        this.edges.push(edge_pair);
        console.log(this.edges);
    },
    //Add an array of nodes.
    add_nodes: function (num_list) {
        for (var id in num_list) {
            this.nodes.push(num_list[id]);
        }
    },
    //add an array of edges.
    add_edges: function (edge_list) {
        for (var id in edge_list) {
            this.edges.push(edge_list[id]);
        }
    },
    //Delete a single node and its corresponding edges.
    delete_node_and_resp_edges: function (num) {
        this.nodes.splice(this.nodes.indexOf(num), 1);
        this.pos_lines.splice(num - 1, 1);
        
        for (var id in this.edges.length) {
            if (this.edges[id].indexOf(num) > -1) {
                this.edges = this.edges.slice(0, this.edges.indexOf(this.edges[id])).concat(this.edges.slice(this.edges.indexOf(this.edges[id])+1))
                //this.edges.splice(this.edges.indexOf(this.edges[id]), 1);
            }

        }
        console.log(graph.nodes);
        console.log();
        console.log(graph.edges);
        

    },
    //Delete a list of nodes and all corresponding edges.
    clear_graph: function() {
        this.nodes = [];
        this.edges = [];
        this.pos_lines = [];
        var can = document.getElementById("Canvas");
        var ctx = can.getContext("2d");
        ctx.beginPath();
        ctx.clearRect(0, 0, 800, 800);
        ctx.stroke();


    },
    // Create the graph based on the nodes and edges..
    create_graph: function () {
        var can = document.getElementById("Canvas");
        for (var id in this.nodes) {
            px = (10*id) + Math.random() * 700;
            py = (2*id) + Math.random() * 600;
            this.pos_lines.push([px, py]);
            var ctx = can.getContext("2d");
            var ctx = can.getContext("2d");
            ctx.beginPath();
            ctx.clearRect(0, 0, 800, 800);
            ctx.fillStyle = "#FF0000"
            ctx.arc(px, py, 20, 0, 2 * Math.PI);

            ctx.stroke();
            ctx.font = "20px Arial";
            ctx.fillText(this.nodes[id], px, py);

        }
        console.log(this.pos_lines);
        //Drawing Edges
        for (var idx = 0; idx < this.edges.length; idx++) {
            
                var x = this.edges[idx][0] - 1;
                var y = this.edges[idx][1] - 1;
                var atx = can.getContext("2d");
                atx.beginPath();
                atx.moveTo(this.pos_lines[x][0], this.pos_lines[x][1]);
                atx.lineTo(this.pos_lines[y][0], this.pos_lines[y][1]);
                atx.stroke();
    
            
                }
        
        
    }

};

$(document).ready(function () {
    $("#add_node").click(function () {
       var nod = Number($("#node").val());

        console.log(nod);
        graph.add_node(nod);
    });

    $("#add_edge").click(function () {
        var edg = JSON.parse($("#edge").val());
        console.log(typeof edg);
        graph.add_edge(edg);
    });

    $("#add_nodes").click(function () {
        var nods = JSON.parse(($("#nodes").val()));
        console.log(nods);
        graph.add_nodes(nods);
    });

    $("#add_edges").click(function () {
        var edgs = JSON.parse(($("#edges").val()));
        console.log(edgs);
        graph.add_edges(edgs);
    });
    $("#create_graph").click(function () {
       // var nods = Array($("#node").val());
        graph.create_graph();
    });
    $("#clear").click(function () {
        // var nods = Array($("#node").val());
        graph.clear_graph();
        
    });

});

//var gr = new graph();if (this.nodes.indexOf(this.edges[idx][0] > -1) && this.nodes.indexOf(this.edges[idx][1] > -1)) {
//graph.add_nodes([6,7,8,9,10,11]);
//graph.add_edges([[4,5],[4,6],[1,7],[1,8],[1,9],[1,10],[4,11]]);
//graph.delete_node_and_resp_edges(1);
//graph.delete_node_and_resp_edges([2,3]);
//graph.create_graph();


