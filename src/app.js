import { ask, closeInput } from "./utils/input.js";
import { login } from "./auth.js";

function showMenu() {
    console.log("=====================================");
    console.log("      Library Management system");
    console.log("=====================================");
    console.log("1. Member Management");
    console.log("2. Book Catalog");   
    console.log("3. Loan Management");   
    console.log("4. Reservations");   
    console.log("5. Fines");
    console.log("6. Reports");  
    console.log("0. Exit");   
}

async function librarianLogin() {
    let attempts = 3;

    while (attempts > 0) {
            console.log("=====================================");
            console.log("           Librarian Login");
            console.log("=====================================");

        const username = await ask("Username: ");
        const password = await ask("Password: ");

        const result = login(username, password);

        if(result.ok) {
            console.log(result.message);
            return true;
        }

        attempts -= 1;
        
        console.log(result.message);
        console.log(`Attempts remaining: ${attempts}`);
    }

    console.log("Too many failed attempts. Access denied.");
    return false;
}