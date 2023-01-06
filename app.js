class LinkedList {
    constructor(first = null) {
        this.first = first 
    }
    append(value){
        const node = new Node(value)
        let temp = this.first
        if (temp.nextNode == null){
            temp.nextNode = node
            temp = temp.nextNode
        }
        else{
        while(temp.nextNode != null){
            temp = temp.nextNode
        }
        temp.nextNode = node
    }

    }
    prepend(value){
        const node = new Node(value)
        node.nextNode = this.first
        this.first = node
    }
    size(){
        let temp = this.first
        let count = 0;
        while(temp != null){
            count++
            temp = temp.nextNode
        }
        return count;
    }
    head(){
        return this.first.value;
    }

    tail(){
        let temp = this.first;
        if (temp.nextNode == null) return temp  
        else{
            while (temp.nextNode != null){
                temp = temp.nextNode
            }
            return temp;
        }
    }

    at(index){
        let temp = this.first;

        for (let i = 0; i < index; i++){
            if (temp.nextNode != null) {
                temp = temp.nextNode;
            }
        }
        return temp.value;
    }

    pop(){
        let temp = this.first;
            while (temp.nextNode.nextNode != null){
                temp = temp.nextNode
            }
            temp.nextNode = null;
        }

    contains(value) {
        let temp = this.first;
        if (temp.value == value) return true;
        else{
            while(temp.nextNode != null){
                temp = temp.nextNode
                if (temp.value == value) return true;
            }
            return false;
        }
    }    

    find(value){
        let temp = this.first;
        let i = 0;
        if (temp.value == value) return i;
        else{
            while (temp.nextNode != null){
                i++;
                temp = temp.nextNode
                if (temp.value == value) return i;
            }
        }
    }

    toString() {
        let temp = this.first;
        let string = "";
        if (temp.nextNode == null) {
            string = `(${temp.value}) -> null`
            return string;
        }
        else{
            while (temp != null){
                string += `(${temp.value}) -> `
                temp = temp.nextNode
                if(temp == null) string += 'null'
            }
            return string;
        }
    }

    inserAt(value, index) {
        let temp = this.first;

        for (let i = 0; i < index; i++){
            if (temp.nextNode != null) {
                temp = temp.nextNode;
            }
        }
        temp.value = value;
    }

}

class Node {
    constructor(value) {    
        this.value = value;
        this.nextNode = null;    
    }
}

const list = new LinkedList(new Node('anas'))

list.append('noor')
list.append('lama')
list.append('hamza')
list.append('wafa')


console.log(list.first)