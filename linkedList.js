class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function linkedList(){
   this.head = null;
   this.size = 0;
   this.tail = null;

   // Add value to the end of the list
     const append = (value) => {
        const n = new Node(value);
        if(this.size === 0){
            this.head = n;
            this.tail = n;
        }else{
            const temp =this.tail;
            this.tail = n;
            temp.next = this.tail
        }
        this.size++
        return n;
     }

    // Add value to the start of the list
    const prepend = (value) => {
       const n = new Node(value);
       if(this.size === 0){
        this.head = n;
        this.tail = n
       }else{
        n.next = this.head;
        this.head = n;
       }
       this.size++;
       return n;
    }

    // Represent the list as a string
    const toStringList = () => {
        let data = "";
        let current = this.head;
        while(current != null){
            data = data + current.data + " -> ";
            current = current.next;
        }
        return data;
    }

    // Remove the last element of the list
    const popList = () => {
        if(this.size === 0) return null;
        let data = this.tail.data;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        } 
        else{
            let current = this.head;
            while (current.next.next != null)
                current = current.next;
            current.next = null;
            this.taill = current;
        }
        this.size--;
        return data;
    }

      // Remove the first element of the list
      const removeFfirst = () => {
        if(this.size === 0) return null;
        let data = this.head.data;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        } 
        else{
            this.head = this.head.next;
            this.size--;
            return data;
        }      
    }    

    // Insert a value at a given index
    const insertAt = (pos,value) => {
        if(pos < 0 || pos > this.size) return;
        if(pos === 0) this.prepend(value);
        else if(pos === this.size) this.append(value);
        else{
            const n = new Node(value);
            let prev = null;
            let current = this.head;
            let counter = 0;
            while(counter < pos){
                prev = current;
                current = current.next;
                counter++;
            }
            n.next = current;
            prev.next = n;
            this.size++;
        }
    }

    // Remove a node at a given index
    const removeAt = (pos) => {
        if(pos < 0 || pos > this.size) return null;
        if(pos === 0) return removeFfirst();
        else if(pos === this.size - 1) return popList();
        else{
            let prev = null;
            let current = this.head;
            let counter = 0;
            while (counter < pos) {
                prev = current;
                current = current.next;
                counter++                
            }
            prev.next = current.next;
            this.size--;
            return current.data;
        }
    }


    // Return the size of the list
    const size = () => {
        let counter = 0;
        let temp = this.head;
         
        while (temp != null) {
            counter++;
            temp = temp.next;            
        }
        return counter;
    }

    
    // Return the list of given index
    const searchIndex = (pos) => {
        let counter = 0;
        let data = "";
        if(pos < 0 || pos > this.size) return null;
        if(pos === 1) return data = this.head.data;
        else if(pos ===  this.size) return data = this.tail.data;
        else{
            let current = this.head;
            let prev = null;
            while(counter < pos){
                prev = current;
                current = current.next;
                counter++
            }
            data = current.data;
            return data;
        }
    }

    // Return the index of the contains a value
    const findIndex  = (value) => {
        let counter = 0;
        let current = this.head;
        while(current != null){           
           if(current.data === value) return counter;
           counter++;
           current = current.next;
        }
        return counter;
    }


    // Return the first node of the list
    const headList = () => {
        return this.head.data;
    }

    // return the last node of the list
    const tailList = () => {
        return this.tail.data;
    }

    // Test if the list contains a value
    const containValue = (value) => {
        let current = this.head;
        while(current != null && current.data != value){
            current = current.next;
        }
        return current == null ? false  : true;
    }

    return { prepend, append, toStringList, popList, insertAt, removeAt, size, searchIndex, findIndex, headList, tailList, containValue }
}


