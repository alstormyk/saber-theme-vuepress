<template>  
  <div class="search-box">
    <input>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.search-box {
  display: inline-block;
  position: relative;
  margin-right: 1rem;
}
.search-box input {
  cursor: text;
  width: 10rem;
  color: var(--textColorT25);
  display: inline-block;
  border: 1px solid var(--borderColorS10);
  border-radius: 2rem;
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2rem;
  outline: none;
  transition: all 0.2s ease;
  background: #fff url("./search.svg") 0.6rem 0.5rem no-repeat;
  background-size: 1rem;
}
.search-box input:focus {
  cursor: auto;
  border-color: var(--accentColor);
}
.search-box .suggestions {
  background: #fff;
  width: 20rem;
  position: absolute;
  top: 1.5rem;
  border: 1px solid var(--borderColorS10);
  border-radius: 6px;
  padding: 0.4rem;
  list-style-type: none;
}
.search-box .suggestions.align-right {
  right: 0;
}
.search-box .suggestion {
  line-height: 1.4;
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
}
.search-box .suggestion a {
  white-space: normal;
  color: var(--textColorT35);
}
.search-box .suggestion a .page-title {
  font-weight: 600;
}
.search-box .suggestion a .header {
  font-size: 0.9em;
  margin-left: 0.25em;
}
.search-box .suggestion.focused {
  background-color: #f3f4f5;
}
.search-box .suggestion.focused a {
  color: var(--accentColor);
}
@media (max-width: 959px) {
  .search-box input {
    cursor: pointer;
    width: 0;
    border-color: transparent;
    position: relative;
  }
  .search-box input:focus {
    cursor: text;
    left: 0;
    width: 10rem;
  }
}
@media (max-width: 959px) and (min-width: 719px) {
  .search-box .suggestions {
    left: 0;
  }
}
@media (max-width: 719px) {
  .search-box {
    margin-right: 0;
  }
  .search-box input {
    left: 1rem;
  }
  .search-box .suggestions {
    right: 0;
  }
}
@media (max-width: 419px) {
  .search-box .suggestions {
    width: calc(100vw - 4rem);
  }
  .search-box input:focus {
    width: 8rem;
  }
}
</style>