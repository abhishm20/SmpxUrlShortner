var Constants = {
  defaultUrl:'urls/10'
}


new Vue({
    el: '#app',
    data: {
        formData: {
            long_url: "",
            custom_key: "",
            category: ""
        },
        categories: [],
        urls: [],
        urlData: {},
        urlFilterData: {
            category: "",
            search: "",
            desc: "",
            asc: ""
        }
    },

    methods:{
        searchUrl: function(){
            this.getUrls();
        },
        setFormCategory: function(category){
            this.formData.category = category;
        },
        setUrlFilterCategory: function(category){
            this.urlFilterData.category = category;
            this.getUrls();
        },
        getCategoryList: function(){
            this.$http.get('/urls/categories').then(function(res){
                this.categories = (res.data.data);
            });
        },
        getUrls: function(urlLink = Constants.defaultUrl){
            var query = [];
            var a = '';
            if(urlLink.indexOf('?') >= 0){
                a = '&';
            }else{
                a = '?';
            }
            if(this.urlFilterData.category){
                query.push('category='+this.urlFilterData.category);
            }
            if(this.urlFilterData.search){
                query.push('search='+this.urlFilterData.search);
            }
            if(this.urlFilterData.sort){
                query.push('sort='+this.urlFilterData.sort);
            }
            if(this.urlFilterData.desc){
                query.push('desc=1');
            }
            if(this.urlFilterData.asc){
                query.push('asc=1');
            }
            query = a+query.join('&');
            console.log(urlLink+query);
            this.$http.get(urlLink+query).then(function(res){console.log(res.data.data.total);
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
        this.getUrls();
    }

})
