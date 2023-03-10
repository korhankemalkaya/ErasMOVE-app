package com.erasmuarrem.ErasMove.services;

import com.erasmuarrem.ErasMove.models.Notification;
import com.erasmuarrem.ErasMove.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationService {
    private final NotificationRepository notificationRepository;
    @Autowired
    public NotificationService(NotificationRepository notificationRepository ) {
        this.notificationRepository = notificationRepository;
    }

    public Notification saveNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    public void deleteNotificationByID(Long id) {
        Optional<Notification> notificationOptional = notificationRepository.findById(id);
        if (!notificationOptional.isPresent()) { throw  new IllegalStateException("Notification with id: "+ id + " doesn't exist!"); }
        notificationRepository.deleteById(id);
    }

    public Notification getNotificationById(Long id) {
        Optional<Notification> notificationOptional = notificationRepository.findById(id);
        if ( !notificationOptional.isPresent() ) {
            throw new IllegalStateException("Notification with id: "+ id+ " doesn't exist!");
        }
        return notificationOptional.get();
    }

    public List<Notification> getNotifications() {
        return notificationRepository.findAll();
    }

    public List<Notification> getNotificationsOfUserByUserId( Long id ) {
        return notificationRepository.findAllByApplicationUserID(id);
    }

    public void markNotificationAsReadByID(Long id) {

        Optional<Notification> notificationOptional = notificationRepository.findById(id);

        if ( !notificationOptional.isPresent() ) {
            throw new IllegalStateException("Notification with id:" + id + " doesn't exist!");
        }

        Notification notification = notificationOptional.get();

        notification.setRead(true); // set the isRead as true
        notificationRepository.save(notification); // save the object back
    }
}
