class HashMap{
    constructor(){
        let table  = [];
    }
    get = (key)=>{
        const idx = this.getHashCode(key);
        for(let keyValuePair of table[idx]){
            if(keyValuePair[0] == key){
                return keyValuePair[1];
            }
        }
        return null;
    }
    set = (key,value)=>{
        const idx = this.getHashCode(key);
        if(table[idx] == undefined) {
            table[idx] = [];
        }
        table[idx].push([key,value]);
    }
    getHashCode = (keyString)=>{
        let hashValue = 0;
        for(let i=0;i<keyString.length;i++){
            hashValue += keyString.charCodeAt(i);
        }
        console.log('HV@@ '+hashValue);
        return hashValue;
    }
}


var nameMap = new HashMap();
nameMap.set('Full Marks',100);
nameMap.set('Marks Full',150);
nameMap.set('Mark Full',10);
console.log('Returned Val1 '+nameMap.get('Full Marks'));
console.log('Returned Val2 '+nameMap.get('Marks Full'));
console.log('Returned Val3 '+nameMap.get('Mark Full '));