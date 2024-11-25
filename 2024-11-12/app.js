const filesLocation = 'c../nmap-datenfiles'; 
try {
    const dirEntries = await Deno.readDir(filesLocation); 
    for await (const dirEntry of dirEntries) {  
        //console.log(dirEntry.name);
        const data = await Deno.readTextFile(dirEntry.name);
        const lines = data.split('\n');
        console.log(lines);
    }
} catch (err) {
    console.error('Error reading the file:', err);
}

