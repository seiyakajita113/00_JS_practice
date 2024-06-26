// ここに記述していきます。
//クラスの定義　クラス名は　大文字で始める。
//classの定義
export class Chiikawa {
    constructor(story, title, image, id) {
        this.story = story;
        this.title = title;
        this.image = image;
        this.id = id;
    }
    //メソッド
    createMarkup() {
        return `           <dl>
            <dt><span>第${this.story}話</span>${this.title}</dt>
            <dd>
              <a href="https://www.youtube.com/watch?v=${this.id}">
                <img src="images/${this.image}" alt="${this.title}" />
              </a>
            </dd>
          </dl>
          `;
    }
}