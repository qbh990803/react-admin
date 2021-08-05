import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import { List, Typography, Input, Button } from 'antd';
import homeAction from 'store/action-creators';

interface Props extends RouteComponentProps {
  value: string;
  list: string[] | [];
  getListData: () => void;
  // eslint-disable-next-line no-unused-vars
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const divStyle = {
  display: 'flex',
  gap: 20,
  width: 500
};

class Home extends Component<Props> {
  // static defaultProps: Props
  componentDidMount() {
    const { getListData } = this.props;
    getListData();
  }

  navigationTo = () => {
    const { history } = this.props;
    history.push('/detail');
  };

  render() {
    const { value, list, onValueChange } = this.props;
    return (
      <div>
        <div style={divStyle}>
          <Input type="text" value={value} onChange={onValueChange} />
          <Button type="primary" onClick={this.navigationTo}>
            跳转
          </Button>
        </div>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={list}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
const { updateInputValueAction } = homeAction;
const mapStateToProps = (state: any) => {
  return {
    value: state.getIn(['home', 'value']),
    list: state.getIn(['home', 'list'])
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getListData: () => {
      const action = homeAction.initListAction();
      dispatch(action as any);
    },
    onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      dispatch(updateInputValueAction(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
