// Javascript - DOM API lecture

// Basic updating of elements

// const d1 = document.getElementById('d1');
// d1.innerHTML = 'WELCOE TO d1';

// const d2 = document.getElementById('d2');
// d2.innerHTML = 'goodbye from d2';



// with timeout;
let title = "";
    if (typeof document !== "undefined") {
      title = document.title;
    }
console.log(title); 

async function demo() {
    console.log("Just starting");
    await new Promise(r => setTimeout(r, 2000));

    const d1 = document.getElementById('d1');
    d1.innerHTML = 'WELCOE TO d1';

    console.log("After two seconds");
    await new PromiseRejectionEvent(r => setTimeout(r, 2000));

    const d2 = document.getElementById('d2');
    d2.innerHTML = 'goodbye from d2';
    console.log("After two seconds");
}
demo();