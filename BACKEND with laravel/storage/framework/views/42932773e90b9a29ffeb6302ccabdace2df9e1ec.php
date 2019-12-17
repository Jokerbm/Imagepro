<?php $__env->startSection('content'); ?>
    <h3 class="page-title"><?php echo app('translator')->getFromJson('quickadmin.bookings.title'); ?></h3>
    <?php echo Form::open(['method' => 'POST', 'route' => ['admin.bookings.store']]); ?>


    <div class="panel panel-default">
        <div class="panel-heading">
            <?php echo app('translator')->getFromJson('quickadmin.qa_create'); ?>
        </div>

        <div class="panel-body">
            <div class="row">
                <div class="col-xs-12 form-group">
                    <?php echo Form::label('customer_id', trans('quickadmin.bookings.fields.customer').' *', ['class' => 'control-label']); ?>

                    <?php echo Form::select('customer_id', $customers, old('customer_id'), ['class' => 'form-control select2']); ?>

                    <p class="help-block"></p>
                    <?php if($errors->has('customer_id')): ?>
                        <p class="help-block">
                            <?php echo e($errors->first('customer_id')); ?>

                        </p>
                    <?php endif; ?>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    <?php echo Form::label('room_id', trans('quickadmin.bookings.fields.room').'', ['class' => 'control-label']); ?>

                    <?php echo Form::select('room_id', $rooms, old('room_id'), ['class' => 'form-control select2']); ?>

                    <p class="help-block"></p>
                    <?php if($errors->has('room_id')): ?>
                        <p class="help-block">
                            <?php echo e($errors->first('room_id')); ?>

                        </p>
                    <?php endif; ?>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    <?php echo Form::label('time_from', trans('quickadmin.bookings.fields.time-from').'*', ['class' => 'control-label']); ?>

                    <?php echo Form::text('time_from', old('time_from'), ['class' => 'form-control datetimepicker', 'placeholder' => '', 'required' => '']); ?>

                    <p class="help-block"></p>
                    <?php if($errors->has('time_from')): ?>
                        <p class="help-block">
                            <?php echo e($errors->first('time_from')); ?>

                        </p>
                    <?php endif; ?>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    <?php echo Form::label('time_to', trans('quickadmin.bookings.fields.time-to').'*', ['class' => 'control-label']); ?>

                    <?php echo Form::text('time_to', old('time_to'), ['class' => 'form-control datetimepicker', 'placeholder' => '', 'required' => '']); ?>

                    <p class="help-block"></p>
                    <?php if($errors->has('time_to')): ?>
                        <p class="help-block">
                            <?php echo e($errors->first('time_to')); ?>

                        </p>
                    <?php endif; ?>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 form-group">
                    <?php echo Form::label('additional_information', trans('quickadmin.bookings.fields.additional-information').'*', ['class' => 'control-label']); ?>

                    <?php echo Form::textarea('additional_information', old('additional_information'), ['class' => 'form-control ', 'placeholder' => '', 'required' => '']); ?>

                    <p class="help-block"></p>
                    <?php if($errors->has('additional_information')): ?>
                        <p class="help-block">
                            <?php echo e($errors->first('additional_information')); ?>

                        </p>
                    <?php endif; ?>
                </div>
            </div>


            <div class="row">
                <div class="col-xs-12 form-group">
                    <?php echo Form::label('Precio',trans('quickadmin.bookings.fields.amount').'*'); ?>

                    <?php echo Form::text('amount', old('amount'), ['class' => 'form-control ', 'placeholder' => '', 'required' => '']); ?>

                    <p class="help-block"></p>
                    <?php if($errors->has('additional_information')): ?>
                        <p class="help-block">
                            <?php echo e($errors->first('additional_information')); ?>

                        </p>
                    <?php endif; ?>
                </div>
            </div>

        </div>
    </div>

    <?php echo Form::submit(trans('quickadmin.qa_save'), ['class' => 'btn btn-danger']); ?>

    <?php echo Form::close(); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('javascript'); ?>
    ##parent-placeholder-b6e13ad53d8ec41b034c49f131c64e99cf25207a##
    <script src="https://cdn.datatables.net/select/1.2.0/js/dataTables.select.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js"></script>
    <script>
        $('.datetimepicker').datetimepicker({
            format: "YYYY-MM-DD HH:mm"
        });
    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>