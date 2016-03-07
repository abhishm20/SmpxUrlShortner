var Constants = {
  paginate: 10
}


new Vue({
    el: '#app',
    data: {
        formData: {
            long_url: "",
            custom_key: "",
            category: ""
        },
        categories: [{"name":"hello"},{"name":"hello"},{"name":"hello"},{"name":"hello"}],
        urls: [],
        urlData: {},
        urlFilterData: {
            category: ""
        }
    },

    methods:{
        setFormCategory: function(category){
            this.formData.category = category;
        },
        setUrlFilterCategory: function(category){
            this.urlFilterData.category = category;
            
        },
        getCategoryList: function(){
            this.$http.get('/urls/categories').then(function(res){
                this.categories = (res.data.data);
            });
        },
        getUrls: function(urlLink){
            this.$http.get(urlLink).then(function(res){
                this.urls = res.data.data.data;
                delete(res.data.data["data"]);
                this.urlData = res.data.data;
            });
        },
        nextPage: function(){
            this.getUrls(this.urlData.next_page_url);
        },
        prevPage: function(){
            this.getUrls(this.urlData.prev_page_url);
        }
    },

    ready: function(){
        this.getCategoryList();
        this.getUrls('urls/'+Constants.paginate);
    }

})
