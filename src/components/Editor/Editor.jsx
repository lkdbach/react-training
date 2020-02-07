import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { ListErrors } from '../Commons';
import { useInput } from '../../hooks';

const Editor = ({ errors, inProgress, article, createArticle, updateArticle }) => {
  const { value: title, setValue: setTitle, bind: bindTitle } = useInput('');
  const { value: description, setValue: setDescription, bind: bindDescription } = useInput('');
  const { value: body, setValue: setBody, bind: bindBody } = useInput('');
  const { value: tagInput, bind: bindTagInput, reset: resetTagInput } = useInput('');
  const [tagList, setTagList] = useState([]);

  const watchForEnter = ev => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      setTagList([...tagList, tagInput]);
      resetTagInput();
    }
  };

  useEffect(() => {
    setTitle(article.title);
    setDescription(article.description);
    setBody(article.body);
    setTagList(article.tagList);
  }, [article, setTitle, setDescription, setBody, setTagList]);

  const removeTagHandler = tag => () => setTagList(tagList.filter(_tag => _tag !== tag));

  const submitForm = ev => {
    ev.preventDefault();
    const _article = {
      title,
      description,
      body,
      tagList
    };
    if (article.articleSlug) {
      updateArticle({ ..._article, slug: article.articleSlug });
    } else {
      createArticle(_article);
    }
  };

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ListErrors errors={errors} />

            <fieldset>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Article Title"
                    {...bindTitle}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="What's this article about?"
                    {...bindDescription}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    {...bindBody}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter tags"
                    {...bindTagInput}
                    onKeyUp={watchForEnter}
                  />

                  <div className="tag-list">
                    {tagList.map(tag => {
                      return (
                        <span className="tag-default tag-pill" key={tag}>
                          <i className="ion-close-round" onClick={removeTagHandler(tag)} />
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </fieldset>

                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="button"
                  disabled={inProgress}
                  onClick={submitForm}
                >
                  Publish Article
                </button>
              </fieldset>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

Editor.propTypes = {
  errors: PropTypes.array,
  createArticle: PropTypes.func.isRequired,
  updateArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  inProgress: PropTypes.bool.isRequired
};

Editor.defaultProps = {
  errors: null
};

export default Editor;
