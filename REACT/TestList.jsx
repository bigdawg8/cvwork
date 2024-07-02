
function TestList(){
    const items = [
        {id:1,name:"Hamburger",price:350},
        {id:2,name:"Pizza",price:250},
        {id:3,name:"Apple",price:100}
    ];
    //items.sort((a,b) => a.price - b.price);
    items.sort((a,b) => a.name.localeCompare(b.name));
    const ListItems = items.map(item => <li key={item.id}>{item.name} {item.price}</li>);
    return(<ol>{ListItems}</ol>);
}
export default TestList