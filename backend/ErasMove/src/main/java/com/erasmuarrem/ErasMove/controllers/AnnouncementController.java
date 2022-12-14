package com.erasmuarrem.ErasMove.controllers;

import com.erasmuarrem.ErasMove.models.Announcement;
import com.erasmuarrem.ErasMove.services.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/announcement")
@CrossOrigin
public class AnnouncementController {

    private final AnnouncementService announcementService;

    @Autowired
    public AnnouncementController(AnnouncementService announcementService) {
        this.announcementService = announcementService;
    }

    @GetMapping()
    public List<Announcement> getAnnouncements() {
        return announcementService.getAnnouncements();
    }

    @GetMapping("/{id}")
    public Announcement getAnnouncementById(@PathVariable("id") Long id) {
        return announcementService.getAnnouncementById(id);
    }

    @GetMapping("/departmentCoordinator/{id}")
    public List<Announcement> getAnnouncementByDepartmentCoordinatorId(@PathVariable("id") Long id) {
        return announcementService.getAnnouncementByDepartmentCoordinatorId(id);
    }

    @GetMapping("/department/{departmentID}")
    public List<Announcement> getAnnouncementsByDepartmentID(@PathVariable("departmentID") Long departmentID) {
        return announcementService.getAnnouncementsByDepartmentID(departmentID);
    }

    @PostMapping("/add")
    public void addAnnouncement(@RequestBody Announcement announcement) {
        announcementService.addAnnouncement(announcement);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAnnouncementById(@PathVariable("id") Long id) {
        announcementService.deleteAnnouncementById(id);
    }
}
