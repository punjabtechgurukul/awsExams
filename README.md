# AWS CLF-C02 iPad Mock Exam — Editable Question Bank

## Main improvement

You can now add as many questions as you want **without editing `index.html`**.

The entire question bank is stored in:

`questions.json`

The app automatically reads the number of questions in that file.

## Add a question

Open `questions.json` and add another object before the closing `]`.

Example:

```json
{
  "q": "Which AWS service provides object storage?",
  "o": [
    "Amazon S3",
    "Amazon EBS",
    "Amazon EFS",
    "Amazon RDS"
  ],
  "a": 0,
  "e": "Amazon S3 is an object storage service. EBS is block storage, EFS is file storage, and RDS is a relational database service.",
  "domain": "Technology",
  "details": [
    {"letter":"A","text":"Object storage service.","correct":true},
    {"letter":"B","text":"Block storage primarily used with EC2.","correct":false},
    {"letter":"C","text":"Managed elastic file storage.","correct":false},
    {"letter":"D","text":"Managed relational database service.","correct":false}
  ]
}
```

### Correct answer value

`a` uses zero-based numbering:

- `0` = A
- `1` = B
- `2` = C
- `3` = D

Always use exactly four options.

`details` controls the quick option review displayed after answering.

## Adding multiple questions

```json
[
  { ... existing question ... },
  { ... new question ... },
  { ... another new question ... }
]
```

Remember to put a comma between question objects.

## After adding questions

1. Save `questions.json`.
2. Upload/commit the updated file to your hosting service.
3. Refresh the app on iPad.
4. The new question count is picked up automatically.

If using GitHub Pages, simply commit the changed `questions.json` file. You do not need to change the HTML.

## Features

- 83 questions currently included
- Add unlimited additional questions
- iPad/Safari touch-friendly
- Instant correct/incorrect feedback
- Correct answer and explanation
- Quick description of every option
- Running score
- Progress tracking
- Local progress saving
- PWA / Add to Home Screen support
- Offline cache after initial load
