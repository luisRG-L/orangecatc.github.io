function showFormPopup() {
    document.getElementById('idgen-form').style.display = 'block';
    document.getElementById('blur').style.display = 'block';
}

function quitFormPopup() {
    document.getElementById('idgen-form').style.display = 'none';
    document.getElementById('blur').style.display = 'none';
}

function generate() {
    const devname = document.getElementById('devname').value;
    const projectname = document.getElementById('projectname').value;
    
    const id = 'OC-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    alert(`Tu Orange ID Ha sido generado. Código: ${id}`);

    const fileContent = `ID: ${id}\nName: ${devname}\nProject: ${projectname}`;
    
    const blob = new Blob([fileContent], { type: 'text/plain' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${devname}-${projectname}-OrangeID.oid`;
    
    link.click();
    
    quitFormPopup();
}