document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your RSVP!');
});

<script type="module">
  // Import Firebase modules
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

  // Your Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyAQqABNeOuEsMeZFK-_tyQHYvGNLYj_VFE",
  authDomain: "rsvp-afdcf.firebaseapp.com",
  projectId: "rsvp-afdcf",
  storageBucket: "rsvp-afdcf.firebasestorage.app",
  messagingSenderId: "478659324377",
  appId: "1:478659324377:web:5365d9a7fb2f162c08d1c8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Handle RSVP form submission
  document.getElementById('rsvpForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;
    const preferences = document.getElementById('preferences').value;

    try {
      // Save RSVP to Firestore
      await addDoc(collection(db, 'rsvps'), {
        name: name,
        email: email,
        attendance: attendance,
        preferences: preferences,
        timestamp: new Date() // Add a timestamp
      });

      alert('Tack för ditt svar!');
      document.getElementById('rsvpForm').reset(); // Clear the form
    } catch (error) {
      console.error('Error saving RSVP:', error);
      alert('Oj, något gick fel, var god försök igen!');
    }
  });
</script>