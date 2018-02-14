package com.qishaung.gsite.common;

/**
 * Created by geek720 on 2018/2/5.
 */
public class ApiCommonResult {
    private boolean success;
    private int tag;
    private String message;
    private Object data;

    public ApiCommonResult(boolean success, int tag, String message, Object data) {
        this.success = success;
        this.tag = tag;
        this.message = message;
        this.data = data;
    }

    public ApiCommonResult(boolean success, int tag, String message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public int getTag() {
        return tag;
    }

    public void setTag(int tag) {
        this.tag = tag;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
