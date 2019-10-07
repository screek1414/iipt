<template>
    <div id="autocomplete" class="autocomplete">
        <input class="autocomplete-input"
               placeholder="Search Wikipedia"
               aria-label="Search Wikipedia"
        >
        <ul class="autocomplete-result-list"></ul>
    </div>
</template>

<script>
    export default {
        name: "SearchForm",
    }
</script>

<style scoped>
    #autocomplete {
        max-width: 400px;
        margin: 0 auto;
    }

    .autocomplete-result {
        border-top: 1px solid #eee;
        padding: 16px;
        background: transparent;
    }

    .wiki-title {
        font-size: 20px;
        margin-bottom: 8px;
    }

    .wiki-snippet {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.54);
    }
</style>
