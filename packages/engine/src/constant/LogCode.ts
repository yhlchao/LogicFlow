export enum ErrorCode {
  // 模型数据错误
  NONE_START_NODE = 1000,
}

export enum WarningCode {
  NONE_START_NODE_IN_DATA = 2000,
}

const errorMsgMapCn = {
  [ErrorCode.NONE_START_NODE]: '未找到入度为0的节点',
};

const warningMsgMapCn = {
  [WarningCode.NONE_START_NODE_IN_DATA]: '初始化数据中未找到入度为0的节点',
};

export const getErrorMsg = (code: ErrorCode) => `error[${code}]: ${errorMsgMapCn[code]}`;

export const getWarningMsg = (code: WarningCode) => `warning[${code}]: ${warningMsgMapCn[code]}`;
