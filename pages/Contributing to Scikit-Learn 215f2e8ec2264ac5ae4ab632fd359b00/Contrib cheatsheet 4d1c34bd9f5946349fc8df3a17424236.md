# Contrib cheatsheet

Based on: [https://scikit-learn.org/stable/developers/contributing.html#pull-request-checklist](https://scikit-learn.org/stable/developers/contributing.html#pull-request-checklist)

### Explain the change

- The PR should substantiate the change: through benchmark of performance or example of usage
- Make sure the code is commented and well documented.
    - Build the doc locally and check its correctness
    - Add time and space complexity
    - Add tutorial and relevant material
- Take part in maintenance and support
    
    

### PR Communication

- PR Prefix
    - `MAINT` and `MNT`: general project maintenance, e.g. private code edits that doesn’t impact users
    - `FEA`: new feature
    - `EHN` and `ENH`: improving an existing feature
    - `FIX`: fixture
    - `DOC`: documentation
    - `CI`: continuous integration
    - `TST`: tests
    - `POC`: proof of concept
    - `PERF`: `EHN` of performance
- PR Title
    - Sometimes `<FIX “PR_NAME”>` is enough, but `<FIX #PR_NUMBER>` is never a good title
- Add links to related PR, e.g. closing #1234

### Testing

- Add [non-regressive tests](https://en.wikipedia.org/wiki/Regression_testing)
- Run pytest on changed files
    - Test a single module: `pytest sklearn/tests/test_common.py -v -k LogisticRegression`
    - Display variable on error: `pytest -l`
    - Run pdb shell on error: `pytest --pdb`
    - Run ipdb shell on error: `pytest --pdbcls=IPython.terminal.debugger:TerminalPdb --capture no`
    - Doesn’t capture print: `pytest -s`
- Check unittest coverage (at least 80%)
    
    ```bash
    $ pip install pytest pytest-cov
    $ pytest --cov sklearn path/to/tests_for_package
    ```
    
- Run static typing analysis with `mypy sklearn`
    - Using `# type: ignore` annotation can be a workaround for a few cases
- Auto-format code: `black .`
- Make sure the code is flake8 compatible: `git diff upstream/main -u -- "*.py" | flake8 --diff`
- Profiling
    
    [https://scikit-learn.org/stable/developers/performance.html#performance-howto](https://scikit-learn.org/stable/developers/performance.html#performance-howto)