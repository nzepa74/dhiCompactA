<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Date" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!-- footer -->
<footer class="main-footer text-sm">
    <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 1.0.0.0
    </div>
    <strong>Copyright &copy;
        <%
            String currentDate = new SimpleDateFormat("yyyy").format(new Date());
            out.print(currentDate);
        %>
        <a href="#">TTPL</a>.</strong> All rights
    reserved.
</footer>

<style>
    .modal-header {
        background-color: #0069d9;
    }

    .modal-title {
        color: white;
        margin-top: 2%;

    }
</style>

<div class="modal fade" tabindex="-1" role="dialog" id="booking-search-modal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Search Booking Details</h5>
                <button type="button" class="close" data-toggle="modal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="from-date" class="control-label">From Date:</label>
                        <input type="text" class="form-control datepicker" required id="from-date">
                    </div>
                    <div class="form-group">
                        <label for="to-date" class="control-label">To Date:</label>
                        <input class="form-control datepicker" required id="to-date">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="searchId">Search Details</button>
            </div>
        </div>
    </div>
</div>



