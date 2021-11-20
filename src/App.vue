<template>
  <div class="container">
    <header><h1>Pagination</h1></header>
    <main>
      <div class="search-area">
        <input id="inputText" type="text" @change="saveInputText">
        <div class="btn btn-search" role="button" @click="findInputText">Find text</div>
      </div>
      <table class="tab">
        <thead>
          <tr class="table-header" @click="sortProductList">
            <th class="column-header">id</th>
            <th class="column-header">type</th>
            <th class="column-header">name</th>
            <th class="column-header">price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="good in displayedProductList" :key="good.id">
            <td>{{ good.id }}</td>
            <td>{{ good.type }}</td>
            <td>{{ good.name }}</td>
            <td>{{ good.price }}</td>
          </tr>
        </tbody>
      </table>
      <nav class="nav">
        <ul class="pagination">
          <li>
            <div id="prev" class="btn btn-pagination" role="button" @click="moveToPrevPage">Prev</div>
          </li>
          <li>
            <div class="btn btn-pagination" role="button"
            v-for="pageNum in pages.slice(page - 1, page + this.numOfPages)"
            :key="pageNum"
            @click="page = pageNum">
            {{ pageNum }}</div>
          </li>
          <li>
            <div id="next" class="btn btn-pagination" role="button" @click="moveToNextPage">Next</div>
          </li>
        </ul>
      </nav>
    </main>
    <footer><p>&copy; Pytalev 2021</p></footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      goods: [],
      page: 1,
      perPage: 50,
      pages: [],
      inputText: '',
      isProductListSorted: false
    }
  },
  methods: {
    getGoods () {
      for (let i = 0; i < 250; i++) {
        this.goods.push({ id: i + 1, type: 'Book' + i * 5, name: 'Peace' + i * 30, price: i * 21 })
      }
    },
    setPages () {
      for (let i = 1; i <= this.numOfPages; i++) {
        this.pages.push(i)
      }
    },
    paginate (goods) {
      const page = this.page
      const perPage = this.perPage
      const from = (page - 1) * perPage
      const to = from + perPage

      return goods.slice(from, to)
    },
    moveToPrevPage () {
      if (this.page > 1) {
        this.page--
      }
    },
    moveToNextPage () {
      if (this.page < this.pages.length) {
        this.page++
      }
    },
    sortProductList () {
      if (this.isProductListSorted === true) {
        this.goods.reverse()
      } else {
        this.goods.sort((a, b) => a.id - b.id)
      }
      this.isProductListSorted = true
    },
    saveInputText (event) {
      this.inputText = event.target.value
    },
    findInputText () {
      return this.goods.filter(item => +item.id === +this.inputText ||
                                       item.type.includes(this.inputText) ||
                                       item.name.includes(this.inputText) ||
                                       item.price === this.inputText)
    }
  },
  computed: {
    displayedProductList () {
      if (this.inputText !== '') {
        return this.paginate(this.findInputText(this.goods))
      } else {
        return this.paginate(this.goods)
      }
    },
    numOfPages () {
      return Math.ceil(this.goods.length / this.perPage)
    }
  },
  created () {
    this.getGoods()
    this.setPages()
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap')

.container
  box-sizing: border-box
  max-width: 1200px
  height: 100vh
  margin: 0 auto
  padding: 0 15px
  background-color: lightgray
  overflow: auto
  scroll-behavior: smooth

  .btn
    border: .1rem solid
    margin: 0 .1rem
    cursor: pointer

  header
    width: 100%
    background-color: #000
    color: #fff
    line-height: 5rem
    vertical-align: middle
    text-align: center

  main
    display: flex
    flex-flow: column wrap
    width: 100%
    background-color: #fff

    .search-area
      display: flex
      justify-content: center
      align-items: center

      input
        outline-style: none
        caret-color: #ff7800
        color: #ff7800

      .btn-search
        padding: .1rem .5rem
        border-radius: .3rem
        background-color: #ff7800
        color: #fff

    table
      width: 100%
      background-color: #hhh

      .table-header
        background-color: #c4c4c4

      tr
        height: 1rem

        th, td
          border: .1rem solid

        .column-header
          cursor: pointer

        .column-header:hover
          background-color: #a4a4a4

    nav
      display: flex
      width: 100%

      ul
        display: flex
        width: 100%
        padding-left: 0
        justify-content: center

        li
          display: flex
          list-style: none

          #prev, #next
            width: 4rem

          .btn-pagination
            width: 1rem
            height: 1rem
            margin: .1rem
            text-align: center
            line-height: 1rem
            vertical-align: middle
            background-color: #ff7800
            color: #fff

  footer
    width: 100%
    background-color: #000
    color: #fff
    line-height: 5rem
    vertical-align: middle
    text-align: center
</style>
