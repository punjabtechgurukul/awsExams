AWS CLF-C02 Mock Test App

Contents:
- index.html: iPad-friendly mock-test interface
- tests/test-1.json ... tests/test-10.json: 10 test forms, 100 questions each

How to use:
1. Keep the folder structure unchanged.
2. Open index.html from a web server/hosting environment.
3. Select a mock test.
4. Select an answer to see immediate correctness and explanation.
5. Navigate through all 100 questions and see the final score.

Important:
The 10 tests use the same 100-question advanced question bank, but each test has a different question order and independently shuffled option order. This makes 10 distinct exam forms without changing the underlying question content.

To add more questions:
- Add questions to the source bank using the same JSON schema:
  id, question, options (4 items), correctAnswer (A-D), explanation.
- Regenerate the test JSON files if you want the new question to appear in all 10 forms.
