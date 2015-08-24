# Benchmarks

There are three different types of benchmarks running with associated modules. All are 100% compatible with others in their respective `code/` directory.

**Interesting Note:** The fastest `flatten` method, by far, is using `instanceof` instead of `Array.isArray`. As this breaks compatibility across frames, it is not used here.
