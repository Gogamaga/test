<template>
    <div class="pagination-ui">
        <ul class="pagination-ui-list">
            <li class="pagination-ui-list__item">
                <a href="#" @click.prevent="handleGoToFirstPage">«</a>
            </li>
            <li class="pagination-ui-list__item">
                <a href="#" @click.prevent="handleGoToPrevPage">⟨</a>
            </li>
            <li v-for="(page, index) in countPaginationItem" :key="index" v-if="page>=from&&page<=to" class="pagination-ui-list__item" :class="{active: page === currentPage }">
                <a href="#" @click.prevent="handleChangePage(page)">{{page}}</a>
            </li>

            <li class="pagination-ui-list__item">
                <a href="#" @click.prevent="handleGoToNextPage">⟩</a>
            </li>
            <li class="pagination-ui-list__item">
                <a href="#" @click.prevent="handleGoToLastPage">»</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "PaginationUI",
  props: {
    count: {
      type: Number,
      default: 1
    },
    countInPage: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      from: 1,
      to: 1
    };
  },
  created() {
    this.visibleListNumberPage();
  },
  methods: {
    handleChangePage(page) {
      const { search, mountain } = this.$route.query;
      search
        ? this.$router.push({
            name: "UI.Articles-Page",
            params: { page },
            query: { search }
          })
        : mountain
          ? this.$router.push({
              name: "UI.Articles-Page",
              params: { page },
              query: { mountain }
            })
          : this.$router.push({ name: "UI.Articles-Page", params: { page } });
    },
    handleGoToPrevPage() {
      const { search, mountain } = this.$route.query;
      if (search) {
        this.$router.push({
          name: "UI.Articles-Page",
          query: { search },
          params: {
            page:
              this.currentPage <= 1
                ? this.countPaginationItem
                : this.currentPage - 1
          }
        });
      } else if (mountain) {
        this.$router.push({
          name: "UI.Articles-Page",
          params: {
            page:
              this.currentPage <= 1
                ? this.countPaginationItem
                : this.currentPage - 1
          },
          query: { mountain }
        });
      } else {
        this.$router.push({
          name: "UI.Articles-Page",
          params: {
            page:
              this.currentPage <= 1
                ? this.countPaginationItem
                : this.currentPage - 1
          }
        });
      }
    },
    handleGoToFirstPage() {
      const { search, mountain } = this.$route.query;
      search
        ? this.$router.push({
            name: "UI.Articles-Page",
            params: { page: 1 },
            query: { search }
          })
        : mountain
          ? this.$router.push({
              name: "UI.Articles-Page",
              params: { page: 1 },
              query: { mountain }
            })
          : this.$router.push({
              name: "UI.Articles-Page",
              params: { page: 1 }
            });
    },
    handleGoToNextPage() {
      const { search, mountain } = this.$route.query;
      if (search) {
        this.$router.push({
          name: "UI.Articles-Page",
          query: { search },
          params: {
            page:
              this.currentPage >= this.countPaginationItem
                ? this.countPaginationItem
                : this.currentPage + 1
          }
        });
      } else if (mountain) {
        this.$router.push({
          name: "UI.Articles-Page",
          params: {
            page:
              this.currentPage >= this.countPaginationItem
                ? this.countPaginationItem
                : this.currentPage + 1
          },
          query: { mountain }
        });
      } else {
        this.$router.push({
          name: "UI.Articles-Page",
          params: {
            page:
              this.currentPage >= this.countPaginationItem
                ? this.countPaginationItem
                : this.currentPage + 1
          }
        });
      }
    },
    handleGoToLastPage() {
      const { search, mountain } = this.$route.query;
      search
        ? this.$router.push({
            name: "UI.Articles-Page",
            params: { page: this.countPaginationItem },
            query: { search }
          })
        : mountain
          ? this.$router.push({
              name: "UI.Articles-Page",
              params: { page: this.countPaginationItem },
              query: { mountain }
            })
          : this.$router.push({
              name: "UI.Articles-Page",
              params: { page: this.countPaginationItem }
            });
    },
    visibleListNumberPage() {
      if (this.currentPage <= this.countPaginationItem) {
        (this.from = 1), (this.to = this.countPaginationItem);
      } else if (this.currentPage > this.countPaginationItem) {
        this.from = this.currentPage - this.countPaginationItem;
        this.to = this.from + this.countPaginationItem;
      }
    }
  },
  computed: {
    currentPage() {
      return +this.$route.params.page;
    },
    countPaginationItem() {
      return Math.ceil(this.count / this.countInPage);
    }
  },
  watch: {
    currentPage() {
      this.visibleListNumberPage();
    },
    count() {
      this.visibleListNumberPage();
    }
  }
};
</script>

<style>
.pagination-ui {
  display: flex;
  justify-content: center;
}
.pagination-ui-list {
  padding: 15px 0;
  display: flex;
}
.pagination-ui-list__item > a {
  padding: 6px 12px;
  border: 1px solid #88b2ff;
  margin-left: -1px;
  font-weight: 400;
}
.pagination-ui-list__item > a:hover {
  background-color: #cddefd;
}
.pagination-ui-list__item.active > a {
  background-color: #88b2ff;
  color: #fff;
}
</style>

