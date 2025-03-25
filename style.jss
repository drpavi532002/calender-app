body {
    font-family: Arial, sans-serif;
    text-align: center;
}

#calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 5px;
    max-width: 500px;
    margin: auto;
}

.day {
    padding: 10px;
    background-color: lightgray;
    text-align: center;
    border: 1px solid black;
}

input, button {
    margin: 5px;
    padding: 8px;
}