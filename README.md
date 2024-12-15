# Markdown Reference Notes

## **1. Headers**
```markdown
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```

---

## **2. Emphasis**
```markdown
*Italic* or _Italic_
**Bold** or __Bold__
***Bold and Italic*** or ___Bold and Italic___
```

---

## **3. Lists**

### Unordered List
```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
```

### Ordered List
```markdown
1. Item 1
2. Item 2
   1. Subitem 2.1
   2. Subitem 2.2
```

---

## **4. Links**
```markdown
[Text](URL)
[Text with Title](URL "Title")
```

---

## **5. Images**
```markdown
![Alt Text](Image_URL)
![Alt Text](Image_URL "Title")
```

---

## **6. Code Blocks**

### Inline Code
```markdown
`Inline code`
```

### Block Code
```markdown
```language
# Code Block
print("Hello, World!")
```
```

---

## **7. Blockquotes**
```markdown
> This is a blockquote.
```

---

## **8. Tables**
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

---

## **9. Horizontal Lines**
```markdown
---
```

---

## **10. Task Lists**
```markdown
- [x] Task 1
- [ ] Task 2
```

---

## **11. Strikethrough**
```markdown
~~Strikethrough~~
```

---

## **12. Escaping Characters**
```markdown
\*Literal Asterisk\*
```

---

## **13. HTML Tags**
```markdown
<details>
  <summary>Click to expand!</summary>
  Hidden content here.
</details>
```

---

## **14. Nesting Lists**
```markdown
1. Ordered Item 1
    - Unordered Subitem 1
    - Unordered Subitem 2
2. Ordered Item 2
```

---

## **15. Combining Markdown and HTML**
```markdown
<strong>Markdown with HTML</strong>
```

---

## **16. GitHub-Specific Features**

### Mentions and References
```markdown
@username, #123 (issue reference), or [PR #456](link)
```

### Autolinking URLs
```markdown
https://example.com
```

---

## **17. Footnotes**
```markdown
Here is a sentence with a footnote.[^1]

[^1]: This is the footnote content.
```

---

## **18. Emojis**
```markdown
:smile: :+1: :rocket:
```

---

## **19. Styling for Dark Mode**
- Use transparent PNGs or SVGs for better compatibility with dark and light themes.

---

## **20. Advanced Table Customization**
```markdown
| Left-Aligned | Center-Aligned | Right-Aligned |
|:-------------|:--------------:|--------------:|
| Text         |    Text        |          Text |
```

---

## **21. Markdown Linting**
- Use tools like **markdownlint** (CLI or VS Code plugin) to ensure clean and standardized Markdown.

---

## **22. Comments in Markdown**
```markdown
<!-- This comment will not appear in the rendered Markdown -->
```

---

## **23. Advanced Blockquote Nesting**
```markdown
> First level
>> Second level
>>> Third level
```
