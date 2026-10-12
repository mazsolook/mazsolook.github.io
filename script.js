document.addEventListener("DOMContentLoaded", () => {
    // Typewriter Effect
    const typewriters = document.querySelectorAll('.typewriter');
    
    typewriters.forEach(el => {
        const text = el.getAttribute('data-text');
        el.innerHTML = ''; // Clear fallback text
        let i = 0;
        
        // Create text node wrapper
        const textSpan = document.createElement('span');
        el.appendChild(textSpan);
        
        // Create blinking cursor
        const cursor = document.createElement('span');
        cursor.classList.add('cursor');
        el.appendChild(cursor);

        const type = () => {
            if (i < text.length) {
                textSpan.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 30); // Typing speed
            }
        };
        
        // Start typing after a short delay
        setTimeout(type, 600);
    });
});