export default {
  "rendered_body": "\n<h1>\n<span id=\"経緯\" class=\"fragment\"></span><a href=\"#%E7%B5%8C%E7%B7%AF\"><i class=\"fa fa-link\"></i></a>経緯</h1>\n\n<p>ほぼ題名通りですが、Flutterで<a href=\"https://pub.dev/packages/path/install\" rel=\"nofollow noopener\" target=\"_blank\">path</a>をインポートしたら、これまでエラーが出ていなかった一文、<code>InputDialog(context);</code>の<code>context</code>に以下のようなエラーが出現。</p>\n\n<div class=\"code-frame\" data-lang=\"text\"><div class=\"highlight\"><pre><code>The argument type 'Context' can't be assigned to the parameter type 'BuildContext'.dart(argument_type_not_assignable)\nContext context\npackage:path/path.dart\n\nThe system path context.\n\nThis differs from a context created with [new Context] in that its [Context.current] is always the current working directory, rather than being set once when the context is created.\n</code></pre></div></div>\n\n<p>pathのインポート文<code>import 'package:path/path.dart';</code>を消したら、エラーも消えるので、pathが悪さをしてるんだろうなぁという推測はできるものの、何をどうして良いのか分からず、1日を無駄にしたので、解決法を記事にします。</p>\n\n<h1>\n<span id=\"解決法\" class=\"fragment\"></span><a href=\"#%E8%A7%A3%E6%B1%BA%E6%B3%95\"><i class=\"fa fa-link\"></i></a>解決法</h1>\n\n<p>1.　インポート文を<br>\n<code>import 'package:path/path.dart';</code><br>\nから<br>\n<code>import 'package:path/path.dart' as path;</code><br>\nのように変更。</p>\n\n<p>2.　pathパッケージを使うものは<code>path.xxx</code>のように、先頭に<code>path.</code>を付けて記述する。<br>\n例えば、<br>\n<code>basename(file.path)</code><br>\nなら、<br>\n<code>path.basename(file.path)</code><br>\nのように記述。</p>\n\n<p>これでエラーは消える。<br>\n簡単な対応でエラーが消えるのですが、日本語記事が少なかったこと、私のようなFlutter初心者であれば自力解決が難しいと思ったこと、私自身が一日を無駄にしたことから記事にしました。</p>\n\n<h1>\n<span id=\"参考にしたサイト\" class=\"fragment\"></span><a href=\"#%E5%8F%82%E8%80%83%E3%81%AB%E3%81%97%E3%81%9F%E3%82%B5%E3%82%A4%E3%83%88\"><i class=\"fa fa-link\"></i></a>参考にしたサイト</h1>\n\n<p><a href=\"https://stackoverflow.com/questions/54417811/flutter-i-get-error-when-i-add-import-packagepath-path-dart\" rel=\"nofollow noopener\" target=\"_blank\">STACK OVERFLOW Flutter - I get error when i add import 'package:path/path.dart'</a></p>\n",
  "body": "# 経緯\nほぼ題名通りですが、Flutterで[path](https://pub.dev/packages/path/install)をインポートしたら、これまでエラーが出ていなかった一文、`InputDialog(context);`の`context`に以下のようなエラーが出現。\n\n```\nThe argument type 'Context' can't be assigned to the parameter type 'BuildContext'.dart(argument_type_not_assignable)\nContext context\npackage:path/path.dart\n\nThe system path context.\n\nThis differs from a context created with [new Context] in that its [Context.current] is always the current working directory, rather than being set once when the context is created.\n```\n\npathのインポート文`import 'package:path/path.dart';`を消したら、エラーも消えるので、pathが悪さをしてるんだろうなぁという推測はできるものの、何をどうして良いのか分からず、1日を無駄にしたので、解決法を記事にします。\n\n# 解決法\n1.　インポート文を\n`import 'package:path/path.dart';`\nから\n`import 'package:path/path.dart' as path;`\nのように変更。\n\n2.　pathパッケージを使うものは`path.xxx`のように、先頭に`path.`を付けて記述する。\n例えば、\n`basename(file.path)`\nなら、\n`path.basename(file.path)`\nのように記述。\n\nこれでエラーは消える。\n簡単な対応でエラーが消えるのですが、日本語記事が少なかったこと、私のようなFlutter初心者であれば自力解決が難しいと思ったこと、私自身が一日を無駄にしたことから記事にしました。\n\n# 参考にしたサイト\n[STACK OVERFLOW Flutter - I get error when i add import 'package:path/path.dart'](https://stackoverflow.com/questions/54417811/flutter-i-get-error-when-i-add-import-packagepath-path-dart)\n",
  "coediting": false,
  "comments_count": 0,
  "created_at": "2021-09-30T00:51:03+09:00",
  "group": null,
  "id": "70ab4e8e145318e72bd2",
  "likes_count": 0,
  "private": false,
  "reactions_count": 0,
  "tags": [
      {
          "name": "Flutter",
          "versions": []
      }
  ],
  "title": "FlutterでPathをインポートした時、contextにエラーが出る時の解決法",
  "updated_at": "2021-09-30T00:51:03+09:00",
  "url": "https://qiita.com/ikeguma_Na/items/70ab4e8e145318e72bd2",
  "user": {
      "description": "大学院生。\r\n普段の研究とか趣味で作ったソースコードや環境設定のうち、誰かが使えそうなものを掲載する予定です。\r\nNoteの方はQiitaに掲載するほどでもない話とかを書くかもしれない。ただ、運用する中でもっと効果的な運用方法を見つけたら変更します。",
      "facebook_id": "",
      "followees_count": 0,
      "followers_count": 1,
      "github_login_name": null,
      "id": "ikeguma_Na",
      "items_count": 5,
      "linkedin_id": "",
      "location": "",
      "name": "",
      "organization": "",
      "permanent_id": 528682,
      "profile_image_url": "https://s3-ap-northeast-1.amazonaws.com/qiita-image-store/0/528682/c5964b12146663d7d8853b4d788a4e8f6ec7cca1/x_large.png?1626532957",
      "team_only": false,
      "twitter_screen_name": "ikeguma_Na",
      "website_url": "https://note.com/ikegumana"
  },
  "page_views_count": null,
  "team_membership": null
}