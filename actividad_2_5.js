// Lote de transacciones que llega de la API (mezcla tipos de datos de forma incorrecta)
let transacciones = ["100.50", "200.00", "ERROR_RECHAZADO", "50.25", "9999.99", "10.00"];
let saldoTotal = 0;

console.log("Iniciando auditoría de transacciones...");

// Tarea 3: Corregir el desbordamiento cambiamos <= por <
for (let i = 0; i < transacciones.length; i++) {
    let transaccion = transacciones[i];

    // Bug 1 / Tarea 2: Controlar valores corruptos con continue
    if (transaccion === "ERROR_RECHAZADO") {
        console.log("Transacción corrupta saltada.");
        continue; // Salta a la siguiente iteración del bucle
    }

    // Convertir el string a número antes de evaluar operaciones numéricas
    let valorNumerico = parseFloat(transaccion);

    // Bug 2 / Tarea 2: Detener operaciones sospechosas con break
    if (valorNumerico > 5000) {
        console.log("¡Alerta de Fraude detectada! Cancelando proceso.");
        break; // Rompe y aborta el bucle inmediatamente
    }

    // Bug 3 / Tarea 1: Coerción de tipos oculta resuelta sumando el número parseado
    saldoTotal += valorNumerico; 
}

console.log("Saldo total auditado: " + saldoTotal);