const questions = [
    {
      question: "What is the first step in assessing an unresponsive person?",
      options: ["Give rescue breaths", "Start chest compressions", "Check responsiveness and call for help", "Apply the AED"],
      correctIndex: 2
    },
    {
      question: "What is the correct ratio of chest compressions to rescue breaths in adult CPR?",
      options: ["15:2", "30:2", "5:1", "10:2"],
      correctIndex: 1
    },
    {
      question: "Where should you place your hands when giving adult chest compressions?",
      options: ["On the left side of the chest", "On the upper abdomen", "On the center of the chest, lower half of the sternum", "On the neck"],
      correctIndex: 2
    },
    {
      question: "At what depth should chest compressions be delivered in an adult?",
      options: ["About 1 inch (2.5 cm)", "About 2 inches (5 cm)", "About 3 inches (7.5 cm)", "Any depth is acceptable"],
      correctIndex: 1
    },
    {
      question: "How fast should chest compressions be performed?",
      options: ["60–80 per minute", "80–100 per minute", "100–120 per minute", "As fast as possible"],
      correctIndex: 2
    },
    {
      question: "What is the purpose of an AED?",
      options: ["Provide oxygen", "Deliver electrical shocks to restart the heart", "Pump the chest", "Monitor breathing rate"],
      correctIndex: 1
    },
    {
      question: "When should an AED be used?",
      options: ["Only after 5 minutes of CPR", "After checking pulse", "As soon as it's available", "Only in hospitals"],
      correctIndex: 2
    },
    {
      question: "What should you do after delivering a shock with the AED?",
      options: ["Wait 2 minutes", "Start CPR immediately", "Turn off the AED", "Leave the victim alone"],
      correctIndex: 1
    },
    {
      question: "If someone is choking and cannot speak, what should you do?",
      options: ["Give rescue breaths", "Perform abdominal thrusts (Heimlich maneuver)", "Start CPR", "Give them water"],
      correctIndex: 1
    },
    {
      question: "What is the correct action if a person is breathing but unresponsive?",
      options: ["Leave them alone", "Begin CPR", "Place them in the recovery position", "Give chest compressions"],
      correctIndex: 2
    },
    {
      question: "Chest compressions should be interrupted as often as possible.",
      options: ["True", "False"],
      correctIndex: 1
    },
    {
      question: "An AED can be used on children with pediatric pads.",
      options: ["True", "False"],
      correctIndex: 0
    },
    {
      question: "If a person has a pulse but is not breathing, you should give rescue breaths.",
      options: ["True", "False"],
      correctIndex: 0
    },
    {
      question: "During CPR, it is okay to stop if you feel tired.",
      options: ["True", "False"],
      correctIndex: 1
    },
    {
      question: "The recovery position helps keep the airway open.",
      options: ["True", "False"],
      correctIndex: 0
    }
  ];

  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-block");
    questionDiv.setAttribute("id", `q${index}`);

    const questionTitle = document.createElement("h3");
    questionTitle.innerText = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionTitle);

    q.options.forEach((option, i) => {
      const label = document.createElement("label");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      input.value = i;

      label.appendChild(input);
      label.append(` ${option}`);
      questionDiv.appendChild(label);
    });

    quizContainer.appendChild(questionDiv);
  });

//   function submitQuiz() {
//     let score = 0;

//     questions.forEach((q, index) => {
//       const selected = document.querySelector(`input[name="question${index}"]:checked`);
//       const questionBlock = document.getElementById(`q${index}`);

//       if (selected) {
//         const selectedValue = parseInt(selected.value);
//         if (selectedValue === q.correctIndex) {
//           score++;
//           questionBlock.classList.add("correct");
//         } else {
//           questionBlock.classList.add("incorrect");
//         }
//       } else {
//         questionBlock.classList.add("incorrect");
//       }
//     });
    
//     document.querySelector('#result').classList.add('result-transition');
//     resultContainer.innerText = `You scored ${score} out of ${questions.length}`;
//   }

function submitQuiz() {
    let score = 0;
  
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      const questionBlock = document.getElementById(`q${index}`);
  
      // إزالة الكلاسات السابقة (لو حصل إعادة محاولة)
      questionBlock.classList.remove("correct", "incorrect");
  
      let feedback = document.createElement("div");
      feedback.className = "feedback";
  
      if (selected) {
        const selectedValue = parseInt(selected.value);
        if (selectedValue === q.correctIndex) {
          score++;
          questionBlock.classList.add("correct");
          feedback.innerHTML = `✅ Correct`;
          feedback.style.color = "green";
        } else {
          questionBlock.classList.add("incorrect");
          feedback.innerHTML = `❌ Wrong – Correct Answer: <strong>${q.options[q.correctIndex]}</strong>`;
          feedback.style.color = "red";
        }
      } else {
        questionBlock.classList.add("incorrect");
        feedback.innerHTML = `⚠️ Not Answered – Correct Answer: <strong>${q.options[q.correctIndex]}</strong>`;
        feedback.style.color = "orange";
      }
  
      questionBlock.appendChild(feedback);
    });
  
    // عرض النتيجة
    document.querySelector('#result').classList.add('result-transition');
    resultContainer.innerText = `You scored ${score} out of ${questions.length}`;
  }

  window.onscroll = function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  // عند الضغط، يرجع لأعلى الصفحة بسلاسة
  document.getElementById("scrollToTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };